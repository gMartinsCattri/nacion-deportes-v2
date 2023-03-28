import React, { useEffect, useState } from "react";
import styles from "./Futbol&BasketballData.module.css";

function SportsData({ deporte }) {
  const [data, setData] = useState([]);
  console.log("deporte", deporte);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://alfred.to/reservas/sports-nation/v2/${deporte}`,
        {
          headers: {
            Authorization:
              "Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==",
          },
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, [deporte]);

  console.log(data);
  return (
    <div>
      {data.map((sport) => (
        <div className={styles.SportDataContainer} key={sport.id}>
          {sport.sportLeagues.map((league) => (
            <div className={styles.SportDataContent} key={league.id}>
              <div className={styles.containerLeagueIcon}>
              <img className={styles.leagueIcons} src={league.leagueIcon} alt="" />
              <p className={styles.SportDataLeagueTitle}>{league.league}</p>
              </div>

              <div className={styles.SportDataLeagueContainer}>
                <div className={styles.sportDataGeneralTableContent}>
                    <div className={styles.sportDataGeneralTableSize}>
                  <p className={styles.sportDataTitleParagraph}>Tabla General</p>
                  <div>
                  <div className={styles.pointsGeneralTable}>
                          <div>  <p className={styles.pointsGeneralTableParagraph}>pts </p></div> <div><p className={styles.pointsGeneralTableParagraph}>pts</p>{" "}</div>
                          <div> <p className={styles.pointsGeneralTableParagraph}>pts</p></div> 
                          </div>
                  <ol className={styles.SportDataOrderedList}>
                    {league.sportGeneralTable.map((tableItem) => (
                      <li>
                        <div
                          className={styles.pointsGeneralTableContainer}
                          key={tableItem.id}
                        >
                          <div>
                          <img
                            className={styles.ImageIcon}
                            src={tableItem.teamIcon}
                            alt=""
                          />{" "}
                          </div>
                          <div>
                            
                          <div className={styles.pointsGeneralTable}>
                          <div>  <p className={styles.pointsGeneralTableParagraph}>{tableItem.pointOne} </p></div> <div><p className={styles.pointsGeneralTableParagraph}>{tableItem.pointTwo}</p>{" "}</div>
                          <div> <p className={styles.pointsGeneralTableParagraph}>{tableItem.pointThree}</p></div> 
                          </div>{" "}
                          </div>
                         <div className={styles.totalPointsGeneralTable}> {tableItem.totalPoints}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                  </div>
                  </div>
                </div>
                <div className={styles.sportDataResultsContent}>
                  <div className={styles.sportDataResultsContainer}>
                  <p className={styles.sportDataTitleParagraph}>Resultados</p>
                  {league.sportResults.map((result) => (
                    <div className={styles.sportDataResult} key={result.id}>
                      <img
                        className={styles.ImageIcon}
                        src={result.teamAIcon}
                        alt=""
                      ></img>{" "}
                     <p> {result.teamAPoints}</p><p> VS</p><p> {result.teamBPoints}</p>
                      <img
                        className={styles.ImageIcon}
                        src={result.teamBIcon}
                        alt=""
                      ></img>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SportsData;
