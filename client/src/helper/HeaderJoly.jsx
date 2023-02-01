import React from "react";
import {NavLink} from "react-router-dom";

const HeaderJoly = () => {
  return (
    <header>
      <nav className="menu">
        <ul className="list">
          <li className="inicio"><NavLink to= '/Home-joly' >INICIO</NavLink></li>
          <li><NavLink to= '/Home-joly' >JOLY</NavLink> 
            <ul>
              <li><NavLink to= '/clientes-joly'>Clientes</NavLink> </li>
              <li><NavLink to= '/productos-joly'>Productos</NavLink></li>
              <li><NavLink to= '/proveedores-joly'>Proveedores</NavLink></li>
            </ul>
          </li>
          
          <li><NavLink to= '/Home-SyS' >SYS</NavLink> 
            <ul>
              <li><NavLink to= '/citas-sys'>Citas</NavLink> </li>
              <li><NavLink to= '/productos-sys'>Productos</NavLink></li>
              <li><NavLink to= '/clientes-sys'>Clientes</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderJoly;
