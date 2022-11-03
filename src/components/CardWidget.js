import React from 'react'
import carrito from '../assets/img/carrito-de-compras.png'
import styles from '../assets/css/styles.css'

const CardWidget = () => {
  return (
    <div>
      <a href="#"><img className='carrito-img' src={carrito} alt="Carrito de compras imagen" /></a>
    </div>
  )
}

export default CardWidget