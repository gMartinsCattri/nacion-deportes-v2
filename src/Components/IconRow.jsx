import React from 'react';
import style from './IconRow.module.css'

function IconRow({deporte, switchBetweenSports}) {



  return (
    <div>
      <div className={style.containerIconRow}>
        <button onClick={() => switchBetweenSports('soccer')}>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_futbol.png" alt="" />
        </button>
        <button  >
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_nfl.png" alt="" />
        </button>
        <button onClick={() => switchBetweenSports('baloncesto')}>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_basketball.png" alt="" />
        </button>
        <button>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_basketball.png" alt="" />
        </button> 
      </div>
    </div>
  );
}

export default IconRow;
