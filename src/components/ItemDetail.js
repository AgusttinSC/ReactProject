import React from 'react'
import { useEffect, useState } from 'react';
import { getProducts } from './assets/services/products';


const ItemDetail = () => {
  
  const [detail, setDetail] = useState([])


  useEffect(() => {
    getProducts().then(data => {
      setDetail(data)
    })
  }, [])


  return (
    <div>
      <h2>{detail.description}</h2>  
      <img src={detail.pictureURL} alt='logo'></img>
      <p>{detail.price}</p>
    </div>
  )
}

export default ItemDetail;