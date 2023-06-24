import { createContext, useState } from "react";

export const cartContext = createContext({cart:[]})

export function CartContextProvider({children}){
const [cart,setCart]= useState([])



function addItem(item, contador){
    const newCart=[...cart]
    newCart.push({...item,contador})
    setCart(newCart)
}

function countItems() {
    let total = 0;
    cart.forEach((item) => {
      total += item.contador;
    });
    return total;
  }

function countTotalPrice (){
    let total = 0;
    cart.forEach((item) => {
      total += item.contador*item.price;
    });
    return total;
}

function clear(){
    setCart([])
}

function removeItem(idDelete){
setCart(cart.filter((item) => item.id!==idDelete))
}

return(
    <cartContext.Provider 
    value={ {cart,setCart, addItem, countItems, countTotalPrice, clear, removeItem} }
    >
        {children}
    </cartContext.Provider>
)
}