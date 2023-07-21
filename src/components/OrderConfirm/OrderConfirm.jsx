import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { getOrder } from '../../services/firebase';

const OrderConfirm = () => {
    const { orderid } = useParams();
    const {cart, countTotalPrice, clear}= useContext(cartContext)
    const [order, setOrder] = useState('')

    useEffect(() => {
        getOrder(orderid)
          .then((respuesta) => {
            setOrder(respuesta);
          })
          .catch((error) => {
            setErrors(error.message);
          });
      }, [orderid]);
      console.log(order)
  return (

        <div>
      <h1>Gracias {order.comprador.fullname} por su compra</h1>
      <h3> Este es tu comprobante de compra: {orderid}</h3>
        
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
          {
          order.items.map((item) => 
            <tr key={item.id} className="cartList_row">
              
              <td>{item.name}</td>
              <td>$ {item.price}</td>
              <td>{item.contador}</td>
              
              <th>$ {(item.price * item.contador).toFixed(2)}</th>
            </tr>
          )
          }
        </tbody>
      </table>
     
    </div>
  );

  
}

export default OrderConfirm