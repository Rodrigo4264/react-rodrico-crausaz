import React, { useContext } from 'react'
import './cartwidget.css'
import cartimg from '../../assets/cartwidget/cartwidget.svg'
import { cartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {countItems} = useContext(cartContext)
  


  return (
    <div className='cartwidget-container'>
        <p className='cartwidget-contador'>{countItems()}</p>
        <img src={cartimg} className='cartwidget-img'/>
        

    </div>
  )
}

export default CartWidget