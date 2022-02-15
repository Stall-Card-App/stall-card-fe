import './Overview.scss';

function Overview() {
  return ( 
    <section className='horse-overview'>
      <h3>Overview</h3>
      <div className='info-container'>
        <article className='overview-stat'>
          <p className='stat-big'>40</p>
          <p className='stat-small'>Property Capacity</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>24</p>
          <p className='stat-small'>Stalled Horses</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>12</p>
          <p className='stat-small'>Pasture Horses</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>4</p>
          <p className='stat-small'>Board Vacancies</p>
        </article>
      </div>
    </section>
  );
}

export default Overview;