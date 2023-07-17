import React, { useContext, useEffect, useState } from 'react'
import { pedirItemporID } from '../../data/adquirirdata'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'
import { getItemData } from '../../services/firebase'

const ItemDetailContainer = ( ) => {
 const [errors, setErrors] = useState(null);
 const [item, setItem]= useState(null)
 const {cart, addItem} = useContext(cartContext)
 console.log(cart)



 const id = useParams().id
console.log(id)
 useEffect(() => {
  getItemData(id)
    .then((respuesta) => {
      setItem(respuesta);
    })
    .catch((error) => {
      setErrors(error.message);
    });
}, [id]);

if (errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

console.log(item)
 
function onAddToCart(contador){
  addItem(item, contador)
 
}


  return (
    <div>        
        {item && <ItemDetail item={item} onAddToCart={onAddToCart}/> }
    </div>
  )
}

export default ItemDetailContainer