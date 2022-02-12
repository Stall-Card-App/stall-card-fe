import './Overview.scss';

function Overview() {
  return ( 
    <section className='horse-overview'>
      <h3>Overview</h3>
      <div className='info-container'>
        <article className='overview-stat'>
          <p className='stat-big'>74</p>
          <p className='stat-small'>/112 stalls occupied</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>14</p>
          <p className='stat-small'>staff members</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>3</p>
          <p className='stat-small'>invoices due</p>
        </article>
        <article className='overview-stat'>
          <p className='stat-big'>2</p>
          <p className='stat-small'>out sick idk</p>
        </article>
      </div>
    </section>
  );
}

export default Overview;