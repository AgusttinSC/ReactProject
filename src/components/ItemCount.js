import React from 'react'
import { useState } from 'react'

const ItemCount = () => {

    const [suma, setSuma] = useState(0)

  return (
    <div>
        <button onClick={()=>setSuma(suma+1)}>+</button>
        {suma}
    </div>
  )
}

export default ItemCount