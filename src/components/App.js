// Fichero src/components/App.js
import {  useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import Landing from './Landing';
import Header from './Header';
import CalendarList from './CalendarList';
import DayDetail from "./DayDetail";
import Data from '../data/data.json';
import NotFoundPage from './NotFoundPage'
import Form from './Form';
import Footer from './Footer';
import Participants from "./Participants";
import JsonParticipants from "../data/participants.json";
import Creators from "./Creators"
import JsonCreators from "../data/creators.json"
const App = () => {
  const [data] = useState(Data);
  const datafiltered = data.days.map((data) => {
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

  const routeData = useRouteMatch("/day/:id");
  const DayId = routeData !== null ? routeData.params.id : "";
  const selectedDay = datafiltered.find((day) => day.id === parseInt(DayId));
  // Datos participantes
  const [dataParticipants] = useState(JsonParticipants);
  const datafilteredParticipants = dataParticipants.participants.map((data) => {
    return {
      id: data.id,
      name: data.name,
      img: data.img,
      description: data.description,
      twitter: data.twitter,
    };
  });
  // Datos creadores
  const [dataCreators] = useState(JsonCreators);
  const datafilteredCreators = dataCreators.creators.map((data) => {
    return {
      id: data.id,
      name: data.name,
      img: data.img,
      twitter: data.twitter,
      job: data.job
    };
  });
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <Landing />
        </Route>
        <Route exact path="/calendar">
          <Header />
          <main className="main">
            <CalendarList data={datafiltered} />
          </main>
          <Footer />
        </Route>

        <Route path="/day/:id">
          <section>
            <DayDetail day={selectedDay} />
          </section>
        </Route>
        <Route exact path="/form">
          <Form data={datafilteredCreators} />
        </Route>
        <Route exact path="/participants">
          <Participants datafiltered={datafilteredParticipants} />
        </Route>
        <Route exact path="/creators">
          <Creators datafiltered={datafilteredCreators} />
        </Route>
        <Route>
          <NotFoundPage data={datafiltered} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
