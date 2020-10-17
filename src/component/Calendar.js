import React from 'react';
import Main from './Main';
import useLaunches from '../component/hooks/useLaunches';
import { Link } from 'react-router-dom';


const Calendar = () => {

  const { data } = useLaunches();

  return (
    <>
      <Main name='Calendar SpaceX' />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">
            {
              data.map(item => (
                <li key={item.id} className="calendar-item">
                  <article className="launches">
                    <div className="launches-image">
                      <img src={item.links.patch.small} alt="" />
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{item.name}</h2>
                      <p className="launches-date">{item.date_local.slice(0,10)}</p>
                      <Link to={`/details/${item.id}`} className="button launches-details">Details</Link>
                    </div>
                  </article>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Calendar;