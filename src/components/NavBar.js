import React from 'react'
import CardWidget from './CardWidget'
import logo from '../assets/img/logo.jpg'
import styles from '../assets/css/styles.css'

const NavBar = () => {
  const greeting = 'Bienvenido a mi tienda!'
  return (
    <div>
      <nav>
        <a href="#"><img src={logo} alt="Logo" className='img-prueba' /></a>

          <ul className='ul-list'>

            <li className='li-item'>
              <a href="#">Menú</a>
            </li>
            <li className='li-item'>
              <a href="#">Productos</a>
            </li>
            <li className='li-item'>
              <a href="#">Sucursales</a>
            </li>

          </ul>

        <div className='container-carrito'>
          <CardWidget />
        </div>
      </nav>
    </div>
  )
}

export default NavBar