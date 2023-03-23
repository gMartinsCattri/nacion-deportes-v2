import React from 'react';
import { Link } from 'react-router-dom';
import style from './IconRow.module.css'

function IconRow({deporte, switchBetweenSports}) {

  return (
    <div>
      <div className={style.containerIconRow}>
        <Link to='/sports' onClick={() => switchBetweenSports('soccer')}>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_futbol.png" alt="" />
        </Link>
        <Link  onClick={() => switchBetweenSports('americano')}>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_nfl.png" alt="" />
        </Link>
        <Link>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_basketball.png" alt="" />
        </Link>
        <Link>
          <img className={style.IconRowImages} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_basketball.png" alt="" />
        </Link> 
      </div>
     
    </div>
  );
}

export default IconRow;
