import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

  return (
    <div className='contador-container'>
        <h4>Nigiri</h4>
        <p>Es el sushi más popular entre los seguidores del pescado. Su base de arroz se prensa con las manos, dándole su característica forma ovalada. Se cubre con una pieza de pescado crudo, marisco u otro ingrediente plano. Suele sazonarse con wasabi.</p>
        <p>STOCK ACTUAL : {stock}</p>

        <div className='boton-container'>
        <button onClick={restar} disabled = {contador <= 0}>-</button>
        <p>{contador}</p>
        <button onClick={sumar} disabled = {contador >= stock}>+</button>
        </div>

    </div>
  )
}

export default ItemCount