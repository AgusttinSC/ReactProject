import React from 'react'
import ItemList from './components/ItemList'
import {useEffect, useState} from 'react';
import {getProducts} from './assets/services/products';

const ItemListContainer = ({greeting, children}) => {

  
  
    const [v, setV] = useState([])

    useEffect(()=>{
        getProducts().then(data =>{
            setV(data)
        })
    }, [v])

  return (
    
    <div><h2>{greeting}</h2>
          <p>{children}</p>
          <ItemList products={v} />
    </div>
  )
}

export default ItemListContainer