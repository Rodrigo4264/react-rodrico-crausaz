import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/CartContext'
import { createOrderWithStockUpdate } from '../../services/firebase'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigateTo = useNavigate();
  const {cart, countTotalPrice, clear}= useContext(cartContext)

  const [buyer, setBuyer]=useState({
    fullname:'',
    email:'',
    phone:'',
    adress:''
  })


  const handleInputChange= (evt)=>{
    const {name, value}= evt.target
    setBuyer({
      ...buyer,
      [name]: value
    })
  }

  const handleForm= (evt)=>{
    evt.preventDefault();
    handleConfirm()
  }
  //-------------------------------------------------------
  async function handleConfirm() {
    const order = {
      items: cart,
      comprador: buyer,
      date: new Date(),
      price: countTotalPrice(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      //console.log("respuesta", id);
      clear();

       navigateTo(`/confirmation/${id}`);
    } catch (error) {
      alert(error);
    }
  }
  //-------------------------------------------------------

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            <form action="" onSubmit={handleForm}>
                    <h3>Informacion del envio</h3>
                  <div className='col-12 '>
                    <input 
                      type="text" 
                      name="fullname" 
                      value={buyer.fullname}
                      placeholder='Nombre completo'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='col-12 mt-3'>
                    <input 
                      type="email" 
                      name="email" 
                      value={buyer.email}
                      placeholder='e-mail'
                      required
                      onChange={handleInputChange}
                      />
                  </div>
                  <div className='col-12 mt-3'>
                    <input 
                      type="tel"  
                      name="phone" 
                      value={buyer.phone}
                      placeholder='Telefono'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='col-12 mt-3'>
                    <input 
                      type="text" 
                      name="adress" 
                      value={buyer.adress}
                      placeholder='direccion'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type='submit' className='mt-3'>Finalizar compra</button>
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