import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item, onAddToCart}) => {
  
  return (
    <div className="ItemDetail-container">
        <div className="producto-detalle">
            <img src={item.img} alt={item.name} className='ItemDetail-img' />
            <div className='ItemDetail-detail'>
                <h3 className="ItemDetail-name">Modelo: {item.name}</h3>
                <p className="ItemDetail-category">Marca: {item.brand}</p>
                <p className="ItemDetail-price">Precio: ${item.price}</p>
                <p className="ItemDetail-resume">{item.material}</p>
                <p className="ItemDetail-resume">{item.description}</p>
                <ItemCount item={item} onAddToCart={onAddToCart}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail