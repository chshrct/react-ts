import React from 'react'
import s from './Preloader.module.css'
import preloader from "../../assets/images/Half-Moon-Loading.svg";



const Preloader = () => {
  return (
    <img className={s.preloader} src={preloader} alt="preloader"></img>
  )
}

export default Preloader