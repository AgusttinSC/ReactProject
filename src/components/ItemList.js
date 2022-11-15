import React from "react";
import { getProducts } from "../assets/services/products";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ItemList = ({products}) => {

  const [product, setProduct] = useState([]) 
   
  useEffect(() => {
    getProducts().then(data => {
      setProduct(data)
    })
  }, [])

  return (
    
    <div>

      {
      product.map(productos =>
        <div>
          <p>{productos.title}</p>
          <img src={productos.pictureUrl} alt='logo'></img>
          <Link to={`/descripcion/${productos.id}`}><button >Detalle</button></Link>
        </div>
      )
      }
    </div>
  )

}
export default ItemList;