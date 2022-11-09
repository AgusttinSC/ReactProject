import React from 'react'

const ItemListContainer = ({greeting, children}) => {

  return (
    <div><h2>{greeting}</h2>
          <p>{children}</p>
    </div>
  )
}

export default ItemListContainer