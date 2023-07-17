import { createContext, useState } from "react";

export const cartContext = createContext({cart:[]})

export function CartContextProvider({children}){
const [cart,setCart]= useState([])



function addItem(item, contador){
    const newCart=[...cart]
    const existInCart = newCart.find(prod => prod.id === item.id)
    if(existInCart){
      existInCart.contador += contador
    }else{
        newCart.push({...item,contador})
    }
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

function sustItem(idSust){
  const newCart=[...cart]
    const itemsust = newCart.find(prod => prod.id === idSust)
    if(itemsust.contador>1){
    itemsust.contador -= 1
    }
    setCart(newCart)
}

function sumItem(idSust){
  const newCart=[...cart]
    const itemsust = newCart.find(prod => prod.id === idSust)
    if(itemsust.stock>itemsust.contador){
    itemsust.contador += 1
    }
    setCart(newCart)
}



return(
    <cartContext.Provider 
    value={ {cart,setCart, addItem, countItems, countTotalPrice, clear, removeItem, sustItem, sumItem} }
    >
        {children}
    </cartContext.Provider>
)
}