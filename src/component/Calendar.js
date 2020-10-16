import React, { useEffect, useState } from 'react';
import Main from './Main';
import FetchData from '../service/FetchData';
import { Link } from 'react-router-dom';


const Calendar = () => {
  const fetchData = new FetchData();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches()
      .then(data => setData(data))
  }, [fetchData]);



  return (
    <>
      <Main />
      <section className="main">
        <h1 className="title">Calendar SpaceX</h1>
      </section>

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
                      <Link to="/details" className="button launches-details">Подробнее</Link>
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