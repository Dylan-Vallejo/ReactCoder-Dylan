import React from "react";
import './NavBar.css'
import Cartwidget from '../CartWidget/cartwidget'

function Menu() {

    return (
  
      <nav className="navbar">
        <h1>Mi-Ecommerce</h1>
        <ul className='nav-ul'>
  
          <li className="lista-item"><a href="#" className="item">Inicio</a></li>
  
          <li className="lista-item"><a href="#" className="item">Notebooks</a></li>
  
          <li className="lista-item"><a href="#" className="item">Consolas</a></li>
  
          <li className="lista-item"><a href="#" className="item">Contacto</a></li>

          <Cartwidget />

        </ul>
        
      </nav>
  
    );
  
  } 

  export default Menu