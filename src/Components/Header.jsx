import React from 'react'
import ndImg from '../img/nd.png'
import style from './Header.module.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className={style.imageNacionDeportesContainer}>
       <Link to='/'> <img className={style.imageNacionDeportes} src={ndImg} alt="" /></Link>
    </div>
  )
}

export default Header