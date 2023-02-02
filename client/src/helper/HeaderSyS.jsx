import React from 'react'
import {NavLink} from "react-router-dom";
import Socials from './Socials';

const HeaderSyS = () => {
  return (
    <header>
      <nav className="menusys">
        <NavLink to='/' title="Ir a pagina principal"><i class="fa-sharp fa-solid fa-house"></i></NavLink>
        <ul className="list2">
          <li className="inicio"><NavLink to= '/home-sys' title='Inicio SyS'>INICIO SYS</NavLink></li>
          <li><NavLink to= '/home-joly' title='Inicio Joly'>JOLY</NavLink> 
            <ul>
              <li><NavLink to= '/clientes-joly'>Clientes</NavLink> </li>
              <li><NavLink to= '/productos-joly'>Productos</NavLink></li>
              <li><NavLink to= '/proveedores-joly'>Proveedores</NavLink></li>
            </ul>
          </li>
          
          <li><NavLink to= '/Home-SyS' title='Inicio SyS'>SYS</NavLink> 
            <ul>
              <li><NavLink to= '/citas-sys'>Citas</NavLink> </li>
              <li><NavLink to= '/productos-sys'>Productos</NavLink></li>
              <li><NavLink to= '/clientes-sys'>Clientes</NavLink></li>
            </ul>
          </li>
        </ul>
        <Socials />
      </nav>
    </header>
  )
}

export default HeaderSyS