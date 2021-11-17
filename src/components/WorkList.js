import WorkArticle from './WorkArticle';
const WorkList = (props) => {
  const list = props.data.map((proyect) => {
    return (
      <li key={proyect.id}>
        <WorkArticle dataProyect={proyect} />
      </li>
    );
  });
  return (
    <div>
      <h2 className='section__title'>Calendario</h2>
      <section id='work'>
        <ul className='section_proyects'>{list}</ul>
      </section>
    </div>
  );
};
export default WorkList;
