// Fichero src/components/App.js
import {  useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import '../styles/App.scss';
import Landing from './Landing';
import Header from './Header';
import WorkList from './WorkList';
import WorkDetail from './WorkDetail';
import Data from '../data/data.json';
import NotFoundPage from './NotFoundPage'
const App = () => {
  const [data, setData] = useState(Data);
  const datafiltered = data.proyects
    .map((data) => {
      return {
        id: data.id,
        day: data.day,
        name: data.name,
        img: data.img,
        tech: data.tech,
        about: data.about,
        github: data.github,
        page: data.page,
        description: data.descripcion,
      };
    });

  const routeData = useRouteMatch('/proyect/:id');
  const ProyectId = routeData !== null ? routeData.params.id : '';
  const selectedProyect = datafiltered.find(
    (proyect) => proyect.id === parseInt(ProyectId)
  );
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/calendar">
          <Header />
          <main className="main">
            <WorkList data={datafiltered} />
          </main>
        </Route>

        <Route path="/proyect/:id">
          <section className="characterDetail">
            <WorkDetail proyect={selectedProyect} />
          </section>
        </Route>
        <Route>
          <NotFoundPage data={datafiltered} />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
