import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/CartContext'


const Checkout = () => {

  const {cart, countTotalPrice, clear, removeItem, sustItem, sumItem}= useContext(cartContext)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            <form action="">
              <h3>Informacion del envio</h3>
            <div className='col-12 '>
              <input type="text" name="fullname" placeholder='Nombre completo'/>
            </div>
            <div className='col-12 mt-3'>
              <input type="text" name="email" placeholder='e-mail'/>
            </div>
            <div className='col-12 mt-3'>
              <input type="text" name="phone" placeholder='Telefono'/>
            </div>
            <div className='col-12 mt-3'>
              <input type="text" name="adress" placeholder='direccion'/>
            </div>
            </form>
          </div>
        </div>
        <div className='col-6'>
          <h3>Tu compra</h3>
          <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              
              <td>{item.name}</td>
              <td>$ {item.price}</td>
              <td>{item.contador}</td>
              
              <th>$ {(item.price * item.contador).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
            <h4>El total de tu compra:${countTotalPrice()}</h4>
      </div>
        </div>
      </div>




    </div>
  )
}

export default Checkout