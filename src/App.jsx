import React from "react";
import './App.css'
import Menu  from './components/NavBar/NavBar'
import ItemListConteiner from './conteiners/itemListConteiner'

function App() {
  

  return (
    <div>

      <Menu />
      <ItemListConteiner greeting = {"Bienvenido a mi Tienda"} />

    </div>
    
  )
}

export default App
