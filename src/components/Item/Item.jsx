import React from 'react'
import './item.css'
import ItemCount from '../ItemCount/ItemCount'
import Btn1 from '../Bottons/Btn1'
import { Link } from 'react-router-dom'


export const Item = ({producto}) => {
    
  return (
    <div className='item-container'>
        <div className='item-title-container'>
        <h4 className='item-desc-title'> {producto.name}</h4>
        </div>
        <img className='item-desc-img' src={producto.img}/>
        <div className='item-desc'>
            <p className='item-desc-price'>Precio: ${producto.price}</p>
            <p className='item-desc-price'>Marca: {producto.brand}</p>
             {/* <ItemCount props={producto}/> */}
             
             <Link to={`/item/${producto.id}`}> <Btn1 text= 'Ver detalle'/> </Link>
            {/* <SeeDetail props={producto}/>    <Btn1 text="Comprar"/>*/}
        </div>
        

    </div>
  )
}