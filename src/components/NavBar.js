import React from 'react'
import CardWidget from './CardWidget'
import logo from '../assets/img/logo.jpg'
import styles from '../assets/css/styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const greeting = 'Bienvenido a mi tienda!'
  return (
    <div>
      <nav>
        <Link to = {'/'}><img src={logo} alt="Logo" className='img-prueba' /></Link>

          <ul className='ul-list'>

            <li className='li-item'>
              <Link to={`/menu/:id`}>Menú</Link>
            </li>
            <li className='li-item'>
            <Link to={`/Productos/:id`}>Productos</Link>
            </li>
            <li className='li-item'>
            <Link to={`/Sucursales/:id`}>Sucursales</Link>
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