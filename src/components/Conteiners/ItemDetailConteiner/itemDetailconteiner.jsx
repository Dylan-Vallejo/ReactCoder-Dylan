import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/itemDetail';
import { db } from '../../../firebase/client';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams()

  useEffect(() => {

    
    const nuevoDoc = doc(db, "productos", id)

    
    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}


export default ItemDetailConteiner;