import React, {useState, useEffect} from 'react'
import style from './GeneralMatchResults.module.css'
import axios from 'axios'

function GeneralMatchResults() {
    const [matchResults, setMatchResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
          try {
            const matchResponse = await axios.get('https://alfred.to/reservas/sports-nation/v2/main-page', { headers: { Authorization: ' Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==' } });
            setMatchResults(matchResponse.data);
            
          } catch (error) {
            console.log(error);
          }
        };
        fetchResults();
      }, []);

      console.log(matchResults)
  return (
    <div className={style.ContainerGeneralMatchResults}>

    </div>
  )
}

export default GeneralMatchResults