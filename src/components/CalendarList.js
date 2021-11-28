import axios from 'axios';
import React, {useEffect, useState} from 'react';
import DayArticle from "./DayArticle";

const CalendarList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://shrouded-castle-77871.herokuapp.com/api')
    .then((result) => {
      setData(result.data);
    })
    .catch((err) => console.log('Error fetching data:', err));
  }, [])

  return (
    <div id="calendar">
      <section>
        <ul className="section__calendar">
          {data.length && data.map((day) => (
            <li key={day.id} className="section__calendar--element">
              <DayArticle data={day} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default CalendarList;
