import React, { useState } from 'react';
import Header from "./Header";
import IconRow from "./IconRow.jsx";
import FutbolData from './Futbol&BacketballData';

function Sports() {

    const [deporte, setDeporte] = useState(null)

    function switchBetweenSports(sport){
      setDeporte(sport)
    }
  
   
  return (
    <div>
      <Header />
      <IconRow deporte={deporte} switchBetweenSports={switchBetweenSports}  />
      <FutbolData deporte={deporte}/>
    </div>
  );
}

export default Sports;
