import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Main from './Main';
import useLaunches from './hooks/useLaunches'
import YouTube from 'react-youtube';


const Details = (props) => {

  const [launch, setLaunch] = useState(null);
  const { getLaunch } = useLaunches();

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id))
  }, [getLaunch])

  const history = useHistory();

  if (!launch) return `LOAD...`

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="launches-date">{launch.date_local.slice(0, 10)}</p>
              <p className="details-description">{launch?.details ? launch?.details : `No description`}</p>
            </div>
          </div>
          <div>
            <YouTube className="details-youtube" videoId={launch.links.youtube_id} />
          </div>
        </div>
        <a onClick={history.goBack} className="button button-back">go back</a>
      </main>
    </>
  )
};

export default Details;