import React, { useState } from 'react'
import './itemcount.css'
import BotonGen from '../Bottons/BotonGen';

const ItemCount = ({item, onAddToCart }) => {

const [contador, setcontador] = useState(0);

function reducirContador(){
   if(contador>0) setcontador(contador-1)
}

function aumentarContador(){
   if(contador<item.stock) setcontador(contador+1)
}

  return (
    <>
    <div className='itemcount-contenedor'>
    <button className='itemcount-btn' onClick={reducirContador}>-</button>
    <p className='itemcount-contador'>{contador}</p>
    <button className='itemcount-btn'  onClick={aumentarContador}>+</button>
    </div>
    




     <BotonGen
     onClick={()=>{onAddToCart(contador)}}
     >
      Agregar al carrito
     </BotonGen>
    </>
  )
}

export default ItemCount