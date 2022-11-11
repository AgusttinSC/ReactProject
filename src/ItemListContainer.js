import React from 'react'
import ItemList from './components/ItemList'

const ItemListContainer = ({greeting, children}) => {

  return (
    <div><h2>{greeting}</h2>
          <p>{children}</p>
          <ItemList />
    </div>
  )
}

export default ItemListContainer