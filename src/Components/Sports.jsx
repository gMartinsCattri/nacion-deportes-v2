import React, { useState } from 'react';
import Header from "./Header";
import IconRow from "./IconRow.jsx";
import SportsData from './SportsData';

function Sports() {

    const [deporte, setDeporte] = useState(null)

    function switchBetweenSports(sport){
      setDeporte(sport)
    }
  
   
  return (
    <div>
      <Header />
      <IconRow deporte={deporte} switchBetweenSports={switchBetweenSports}  />
      <SportsData deporte={deporte}/>
    </div>
  );
}

export default Sports;
