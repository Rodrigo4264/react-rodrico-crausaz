import React, { useEffect, useState } from "react";
import './itemlistcontainer.css'
import {Adquirirdata} from '../../data/adquirirdata'
import {ItemList} from '../ItemList/ItemList'
import { useParams } from "react-router-dom";


function ItemListContainer (){

    const [productos, setProductos]=useState([])
    const cat = useParams().category
    useEffect(() => {
        Adquirirdata().then((res)=>{
            if(cat){  
                setProductos(res.filter((pro)=>pro.category===cat))
            }else{          
                setProductos(res)
            }   
        })
    }, [cat])
    

    return(        
            <div className="ItemListContainer">    
                <ItemList productos={productos}/>    
            </div>        
    )
}
export default ItemListContainer;
