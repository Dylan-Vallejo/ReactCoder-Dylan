import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/itemList'
import './itemListConteiner.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../firebase/client'

 const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {

    
    const misProductos =
      categoryId ?
        query(collection(db, "productos"), where("categoria", "==", categoryId))
        :
        collection(db, "productos")

    
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
    

  }, [categoryId])


  return (
    <div className='itemcontainer'>

      {productos.length == 0 ? (<h1>CARGANDO..</h1>) : (<ItemList productos={productos} />)}

    </div>
  )

}

export default ItemListConteiner;