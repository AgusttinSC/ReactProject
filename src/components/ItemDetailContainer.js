import React from 'react'
import { getProducts } from '../assets/services/products';
import { useEffect, useState } from 'react';
import CardWidget from './CardWidget';
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])

    useEffect(() => {
        getProducts().then(data => {
            setProducto(data) 
        })

    }, [])
    
    return (
         <div>
            <h1>{producto.name}</h1>
            <img src={producto.pictureURL} alt='PRODUCTO'></img>
            <p>{producto.description}</p>
            <CardWidget/><ItemCount stock= {producto.stock}/>
            <p>{producto.price}</p>   
        </div>
        )

    }


export default ItemDetailContainer;