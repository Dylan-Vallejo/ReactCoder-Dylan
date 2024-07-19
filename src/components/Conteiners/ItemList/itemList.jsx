import React from 'react'
import { Item } from '../Item/item'
import './itemList.css'

export const ItemList = ({ productos }) => {
    
    return (
        <div className='contenedor-itemlist'>
      {
        productos.map((producto) =>

        (
          <Item key={producto.id} producto={producto} />
        )


        )
      }
    </div>
  )
}