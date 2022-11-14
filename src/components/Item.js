import React from 'react'

const Item = ({productos}) => {
  return (
    <div>
    {productos.map((productos =>
    <div>
        <p>{productos.title}</p>
        <p>{productos.description}</p>
    </div> 
    ))}
</div>
  )
}

export default Item