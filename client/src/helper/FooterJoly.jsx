import React from 'react'
import hummus from '../assets/joly/hummus.jpg'
import guacamole from '../assets/joly/guacamole.jpg'
import Socials from './Socials'

const FooterJoly = () => {
  return (
    <footer className='footer'>
      <div className='integrantes'>
        <h1>Integrantes</h1>
        <ul>
          <li>Adrian Jimenez</li>
          <li>Yeferson Idarraga</li>
        </ul>
      </div>
      <div className="separador"></div>
      <div className="referencias">
        <h1>Referencias</h1>
        <ul>
          <li><a target="_blank" href="https://gastronomiaycia.republica.com/2008/02/20/receta-de-guacamole/">https://gastronomiaycia.republica.com/2008/02/20/receta-de-guacamole/</a></li>
          <li><a target="_blank" href="https://antojandoando.com/recetas/hummus/">https://antojandoando.com/recetas/hummus/</a></li>
        </ul>
      </div>
      <div className="separador"></div>
      <div className='logo-hummusG'>
        <div className='hummus-guacamole'>
          <img src={hummus} alt="hummus" /><img src={guacamole} alt="guacamole" />
        </div>
        <div className='jolysocial'>
          <h1>JOLY</h1>
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default FooterJoly