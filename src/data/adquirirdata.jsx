import React from 'react'
import data from './data.json'

export const Adquirirdata = () => {
  return (
    new Promise ((resolve, reject)=>{
        resolve(data)
    })  )
}

export const pedirItemporID = (id)=>{
  return new Promise((resolve, reject)=>{
    const item = data.find((el)=>el.id==id)
  
    if (item){
      resolve(item)
    }else{
      reject({
        error:'No se encontro el producto '
      })
    }
  })
  }