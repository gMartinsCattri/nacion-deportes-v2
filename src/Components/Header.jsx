import React from 'react'
import ndImg from '../img/nd.png'
import style from './Header.module.css'

function Header({backToMainPage}) {
  return (
    <div className={style.imageNacionDeportesContainer}>
       <button className={style.buttonHeader} onClick={()=> backToMainPage(null)} > <img className={style.imageNacionDeportes} src={ndImg} alt="" /></button>
    </div>
  )
}

export default Header