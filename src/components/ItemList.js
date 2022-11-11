import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../assets/services/products'



const ItemList = () => {
  
    const [v, setV] = useState([])

    useEffect(()=>{
        getProducts().then(data =>{
            setV(data)
        })
    }, [v])
  
    return (
    <div>
        {v.map((productos => 
        <p>{productos.title}</p>))}
    </div>
  )
}

export default ItemList