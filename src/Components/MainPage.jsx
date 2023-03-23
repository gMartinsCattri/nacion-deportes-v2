import React, { useState } from 'react';
import Header from "./Header";
import IconRow from "./IconRow.jsx";
import GeneralMatchResults from "./GeneralMatchResults";
import VideoContainer from "./VideoContainer";
import News from "./News";
import WebSiteDirection from "./WebSiteDirection";
import SportsData from './SportsData';

function MainPage() {

    const [deporte, setDeporte] = useState(null)

    function switchBetweenSports(sport){
      setDeporte(sport)
    }

    return (
        <div>
            <Header />
            <IconRow deporte={deporte} switchBetweenSports={switchBetweenSports}  />
            <GeneralMatchResults />
            <VideoContainer />
            <News />
            <WebSiteDirection />
            <SportsData deporte={deporte} />
        </div>
    );
}

export default MainPage;
