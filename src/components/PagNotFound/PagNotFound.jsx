import React from 'react'
import './pagnotfound.css'
// import errorr from '../../assets/404.jpg'

const PagNotFound = () => {
  return (
    <div className='err_container'>
        <div>
        <p className='err_tex'>Lo sentimos, la pagina que desea cargar no se encuantra </p>
        <p className='err_tex'>intente cargar otra pagina </p>
        <img src={errorr} className='err_img'/>
        </div>
    </div>
  )
}

export default PagNotFound