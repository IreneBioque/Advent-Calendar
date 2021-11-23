import DayArticle from "./DayArticle";


const CalendarList = (props) => {
  const list = props.data.map((day) => {
    return (
      <li key={day.id}>
        <DayArticle data={day} />
      </li>
    );
  });
  return (
    <div>
      <section id="calendar">
        <ul className="section_calendar">{list}</ul>
      </section>
    </div>
  );
};
export default CalendarList;
