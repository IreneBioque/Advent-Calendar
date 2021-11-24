import axios from 'axios';
import React, {useEffect, useState} from 'react';
import DayArticle from "./DayArticle";

const CalendarList = () => {

  const [data, setData] = useState([]);

  const list = data.map((day) => {
    return (
      <li key={day.id} className="section__calendar--element">
        <DayArticle data={day} />
      </li>
    );
  });

  useEffect(() => {
    axios.get('https://shrouded-castle-77871.herokuapp.com/api')
    .then((result) => {
      setData(result.data);
    })
    .catch((err) => console.log('Error fetching data:', err));
  }, [])

  return (
    <div>
      <section id="calendar">
        <ul className="section__calendar">{list}</ul>
      </section>
    </div>
  );
};
export default CalendarList;
