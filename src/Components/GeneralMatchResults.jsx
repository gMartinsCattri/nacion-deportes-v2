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
    // após receber os dados, filtramos as informações que nos interessam
    const soccerLeague = sportsData.find(
      (sport) => sport.sportName === "soccer"
    );
    if (soccerLeague) {
      const soccerLeagueResults = soccerLeague.sportLeagues[0].sportResults;
      setSoccerResults(soccerLeagueResults);
    }

    const basketballLeague = sportsData.find(
      (sport) => sport.sportName === "baloncesto"
    );
    if (basketballLeague) {
      const basketballLeagueResults = basketballLeague.sportLeagues[0].sportResults;
      setBasketballResults(basketballLeagueResults);
    }
  }, [sportsData]);
  return (
    <div className={style.ContainerGeneralMatchResults}>

    <div className={style.GeneralMatchResults}>
          <div>
           
            <div className={style.generalMatchesScrollContent}>
              {soccerResults.map((result) => (
                <div key={result.id}>
                 <div className={style.containerMatchs}>  <img className={style.imageIcon} src={result.teamAIcon} alt="" /> <p>{result.teamAPoints}</p> <p> VS </p> <p>{result.teamBPoints}</p> <img className={style.imageIcon} src={result.teamBIcon} alt="" /></div>
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className={style.GeneralMatchResults}>
          <div>
           
            <div className={style.generalMatchesScrollContent}>
              {basketballResults.map((result) => (
                <div key={result.id}>
                 <div className={style.containerMatchs}>  <img className={style.imageIcon} src={result.teamAIcon} alt="" /> <p>{result.teamAPoints}</p> <p> VS </p> <p>{result.teamBPoints}</p> <img className={style.imageIcon} src={result.teamBIcon} alt="" /></div>
                </div>
              ))}
            </div>
          </div>
          </div>
       
        <div className={style.GeneralMatchResults}></div>
        <div className={style.GeneralMatchResults}></div>
        
    </div>
  )
}

export default GeneralMatchResults