import React, {useState, useEffect} from 'react'
import style from './GeneralMatchResults.module.css'
import axios from 'axios'
function GeneralMatchResults() {
  const [sportsData, setSportsData] = useState([]);
  const [soccerResults, setSoccerResults] = useState([]);
  const [basketballResults, setBasketballResults] = useState([]);


  useEffect(() => {
    const fetchResults = async () => {
      try {
        const matchResponse = await axios.get('https://alfred.to/reservas/sports-nation/v2/main-page', { headers: { Authorization: ' Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==' } });
        setSportsData(matchResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResults();
  }, []);

  useEffect(() => {
    // find the soccer league and its results
    const soccerLeague = sportsData.find(
      (sport) => sport.sportName === 'soccer'
    );
    if (soccerLeague) {
      const soccerLeagueResults = soccerLeague.sportLeagues[0].sportResults;
      setSoccerResults(soccerLeagueResults);
    }

    // find the basketball league and its results
    const basketballLeague = sportsData.find(
      (sport) => sport.sportName === 'baloncesto'
    );
    if (basketballLeague) {
      const basketballLeagueResults = basketballLeague.sportLeagues[0].sportResults;
      setBasketballResults(basketballLeagueResults);
    }
  }, [sportsData]);
  
  return (
    <div className={style.ContainerGeneralMatchResults}>
      {/* render soccer league and leagueIcon */}

      <div className={style.ContainerSoccerGeneral}>
      {sportsData.map((sport) =>
        sport.sportName === 'soccer' ? (
          <div className={style.ContainerImageLeague} key={sport.id}>
            <img src={sport.sportLeagues[0].leagueIcon} alt="" />
            <h2>{sport.sportLeagues[0].league}</h2>
            
          </div>
        ) : null
      )}

      <div className={style.GeneralMatchResults}>
        <div>
          {/* render soccer results */}
          <div className={style.generalMatchesScrollContent}>
            {soccerResults.map((result) => (
              <div key={result.id}>
        
                  <div className={style.containerMatchs}>  <img className={style.imageIcon} src={result.teamAIcon} alt="" /> <p>{result.teamAPoints}</p> <p> VS </p> <p>{result.teamBPoints}</p> <img className={style.imageIcon} src={result.teamBIcon} alt="" /></div>
            
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* render basketball league and leagueIcon */}
      <div className={style.ContainerBaloncestoGenerals}>
      {sportsData.map((sport) =>
        sport.sportName === 'baloncesto' ? (
          <div className={style.ContainerImageLeague} key={sport.id}>
             <img src={sport.sportLeagues[0].leagueIcon} alt="" />
            <h2>{sport.sportLeagues[0].league}</h2>
          </div>
        ) : null
      )}

      <div className={style.GeneralMatchResults}>
        <div>
          {/* render basketball results */}
          <div className={style.generalMatchesScrollContent}>
            
          </div>
        </div>
      </div>
      </div>
      <div className={style.ContainerBaloncestoGenerals}>
      {sportsData.map((sport) =>
        sport.sportName === 'baloncesto' ? (
          <div className={style.ContainerImageLeague} key={sport.id}>
             <img src={sport.sportLeagues[0].leagueIcon} alt="" />
            <h2>{sport.sportLeagues[0].league}</h2>
          </div>
        ) : null
      )}

      <div className={style.GeneralMatchResults}>
        <div>
          {/* render basketball results */}
          <div className={style.generalMatchesScrollContent}>
          {basketballResults.map((result) => (
              <div key={result.id}>
                                <div className={style.containerMatchs}>  <img className={style.imageIcon} src={result.teamAIcon} alt="" /> <p>{result.teamAPoints}</p> <p> VS </p> <p>{result.teamBPoints}</p> <img className={style.imageIcon} src={result.teamBIcon} alt="" /></div>

              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className={style.ContainerBaloncestoGenerals}>
      {sportsData.map((sport) =>
        sport.sportName === 'baloncesto' ? (
          <div className={style.ContainerImageLeague} key={sport.id}>
             <img src={sport.sportLeagues[0].leagueIcon} alt="" />
            <h2>{sport.sportLeagues[0].league}</h2>
          </div>
        ) : null
      )}

      <div className={style.GeneralMatchResults}>
        <div>
          {/* render basketball results */}
          <div className={style.generalMatchesScrollContent}>
            
          </div>
        </div>
      </div>
      </div> 
    </div>
  );
}

export default GeneralMatchResults