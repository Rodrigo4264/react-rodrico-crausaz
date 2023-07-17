import React, { useEffect, useState } from "react";
import './itemlistcontainer.css'

import {ItemList} from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../../services/firebase";

function ItemListContainer (){

    const [productos, setProductos]=useState([])
    const cat = useParams().category
    console.log(cat)

const fetchData = cat === undefined ? getData : getCategoryData;

  useEffect(() => {
    fetchData(cat)
      .then((respuesta) => setProductos(respuesta))
  }, [cat]);    


    return(        
            <div className="ItemListContainer">    
                <ItemList productos={productos}/>    
            </div>        
    )
}
export default ItemListContainer;
