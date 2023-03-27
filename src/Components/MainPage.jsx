import React, { useState } from "react";
import Header from "./Header";
import IconRow from "./IconRow.jsx";
import GeneralMatchResults from "./GeneralMatchResults";
import VideoContainer from "./VideoContainer";
import News from "./News";
import WebSiteDirection from "./WebSiteDirection";
import SportsData from "./Futbol&BacketballData";

function MainPage() {
  const [deporte, setDeporte] = useState(null);
  const [isDeporteDefined, setIsDeporteDefined] = useState(null);

  function switchBetweenSports(sport) {
    setDeporte(sport);
    setIsDeporteDefined(true);
  }

  function backToMainPage(sport) {
    setDeporte(sport);
    setIsDeporteDefined(null);
  }

  return (
    <div>
      {deporte === null && isDeporteDefined === null ? (
        <div>
          <Header backToMainPage={backToMainPage} />
          <IconRow
            deporte={deporte}
            switchBetweenSports={switchBetweenSports}
          />
          <GeneralMatchResults />
          <VideoContainer />
          <News />
          <WebSiteDirection />
        </div>
      ) : (
        <div>
          <Header backToMainPage={backToMainPage} />
          <IconRow
            deporte={deporte}
            switchBetweenSports={switchBetweenSports}
          />
          <SportsData deporte={deporte} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
