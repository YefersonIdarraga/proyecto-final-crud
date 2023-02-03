import React from 'react'
import { Link } from 'react-router-dom'
import guacamole from '../assets/joly/guacamole.jpg'
import cuidadoUñas from '../assets/sys/cuidado-uñas.jpg'

const Home = () => {
  return (
    <section className='home'>
      <Link to='/home-joly' className='joly'>
          <div className='logos-home'><img src={guacamole} alt="logo" /></div>
          <div className='joly-cont'>
            <h1>Ir a la web Joly</h1>
            <p>
            Somos una empresa cien porciento vegetariana, <br/>
            contamos con productos de alta calidad y elaborada <br/>
            por los mejores profesionales.
            </p>
          </div>
      </Link>
      <div className='divisor'>
        <h1>Integrantes: Adrian Jimenez y Yeferson Idarraga.</h1>
      </div>
      <Link to='/home-sys' className='sys'>
          <div className='logos-home'><img src={cuidadoUñas} alt="logo" /></div>
            <div className='sys-cont'>
              <h1>Ir a la web SyS</h1>
              <p>
              Somos la empresa más grande en productos <br/>
              y cuidado de tus uñas, garantizamos calidad <br />
              y  seguridad en nuestros servicios.
              </p>
            </div>
      </Link>
    </section>
  )
}

export default Home