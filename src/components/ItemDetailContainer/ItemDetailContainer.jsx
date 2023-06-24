import React, { useContext, useEffect, useState } from 'react'
import { pedirItemporID } from '../../data/adquirirdata'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'

const ItemDetailContainer = ( ) => {

 const [item, setItem]= useState(null)
 const {cart, addItem} = useContext(cartContext)
 



 const id = useParams().id
 
useEffect(()=>{
 pedirItemporID(id)
 .then((res)=>{
    setItem(res)
 })
},[id])

function onAddToCart(contador){
  addItem(item, contador)
  alert(`agregaste ${contador} al carrito`)
}


  return (
    <div>        
        {item && <ItemDetail item={item} onAddToCart={onAddToCart}/> }
    </div>
  )
}

export default ItemDetailContainer