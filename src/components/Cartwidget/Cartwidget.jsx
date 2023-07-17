import React, { useContext } from 'react'
import './cartwidget.css'
import cartimg from '../../assets/cartwidget/cartwidget.svg'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {countItems} = useContext(cartContext)
  


  return (
    <Link to={'/bag'}>
    <div className='cartwidget-container'>
        <p className='cartwidget-contador'>{countItems()}</p>
        <img src={cartimg} className='cartwidget-img'/>        
    </div>
    </Link>
  )
}

export default CartWidget