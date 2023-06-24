import React from 'react'
import {Item }from '../Item/Item'
import './itemlist.css'

export const ItemList = ( {productos} ) => {
  return (
    <div className="container"> 
        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />  ) }
        </div>
    </div>
  )
}