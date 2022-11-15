import React from 'react'

const Item = ({productos}) => {
  return (
    <div>
    {productos.map((productos =>
    <div>
        <p>{productos.title}</p>
        <p>{productos.description}</p>
        <p>{productos.price}</p>
        <img src={productos.pictureUrl} alt="VARIEDADESD DE SUSHI"></img>
    </div> 
    ))}
</div>
  )
}

export default Item