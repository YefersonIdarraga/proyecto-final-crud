import React from 'react'
import kit from '../assets/sys/kit.jpeg'
import uñas from '../assets/sys/cuidado-uñas.jpg'
import Socials from './Socials'

const FooterSyS = () => {
  return (
    <footer className='footer footersys'>
      <div className='integrantes integrantesys'>
        <h1>Integrantes</h1>
        <ul>
          <li>Adrian Jimenez</li>
          <li>Yeferson Idarraga</li>
        </ul>
      </div>
      <div className="separador separadorsys"></div>
      <div className="referencias referenciasys">
        <h1>Referencias</h1>
        <ul>
          <li><a target="_blank" href="https://www.vistafarma.com/blog/la-importancia-de-el-cuidado-de-las-unas/">https://www.vistafarma.com/blog/la-importancia-de-el-cuidado-de-las-unas/</a></li>
        </ul>
      </div>
      <div className="separador separadorsys"></div>
      <div className='logo-hummusG'>
        <div className='hummus-guacamole'>
          <img src={kit} alt="hummus" /><img src={uñas} alt="guacamole" />
        </div>
        <div className='jolysocial'>
          <h1>SyS</h1>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default FooterSyS