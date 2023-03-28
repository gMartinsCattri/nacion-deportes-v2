return (
    <div className={style.ContainerGeneralMatchResults}>
      {/* render soccer league and leagueIcon */}
      {sportsData.map((sport) =>
        sport.sportName === 'soccer' ? (
          <div key={sport.id}>
            <h2>{sport.sportLeagues[0].league}</h2>
            <img src={sport.sportLeagues[0].leagueIcon} alt="" />
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

      {/* render basketball league and leagueIcon */}
      {sportsData.map((sport) =>
        sport.sportName === 'baloncesto' ? (
          <div key={sport.id}>
            <h2>{sport.sportLeagues[0].league}</h2>
            <img src={sport.sportLeagues[0].leagueIcon} alt="" />
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
  );
}




