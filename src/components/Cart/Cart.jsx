import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Btn1 from '../Bottons/Btn1'








const Cart = () => {

const {cart, countTotalPrice, clear, removeItem, sustItem, sumItem}= useContext(cartContext)

  return (
    <div>
        {cart.length ===0 ?
        <div> 
        <h1>Tu cerrito esta vecio</h1>
        
        <Link to={'/'} className='flex flex-nowrap min-h-0 min-w-0 mt-6'>
             <Btn1 text={"Continuar comprando"}/>
        </Link>
        </div>
        :
        <div className='container'>

            <div ><h1>Tu lista de compras </h1></div>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                    <div className='col-3'>Producto</div>
                    <div className='col-3'>Pricio</div>
                    <div className='col-3'>Cantidad</div>
                    <div className='col-3'>Total</div>
                    </div>
                    {
                    
                    cart.map((prod)=>
                    <div key={prod.id}>
                        <div className='row'>
                            <div className='col-3'>{prod.name}</div>
                            <div className='col-2'>{prod.price}</div>


                            <div className='col-3'>
                                <button onClick={()=>sustItem(prod.id)}>
                                <span>-</span>
                                </button> 
                            {prod.contador}
                                <button onClick={()=>sumItem(prod.id)}>
                                <span>+</span>
                                </button> 
                            </div>


                            <div className='col-2'>{prod.contador*prod.price}</div>

                            <div onClick={() => removeItem(prod.id)} className='col-2'>
                            ❌
                            </div>

                        </div>

                    </div>
                    )}
                    <button onClick={clear}>
                    <span>Vaciar carrito</span>
                    </button>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-3'>Subtotal: </div>
                        <div className='col-9'>${countTotalPrice()}</div>
                        <div className='col-3'>Envío: </div>
                        <div className='col-9'>Gratis </div>
                        <div className='col-3'>Impuestos </div>
                        <div className='col-9'>Se calculan al finalizar </div>

                        <div>
                            <Link to={'/checkout'} className='flex flex-nowrap min-h-0 min-w-0 mt-6'>
                                <Btn1 text={"Finalizr compra"}/>
                            </Link>
                        </div>


                    </div>
                    


                </div>
         </div>
        </div> 
    }







    </div>
  )
}

export default Cart