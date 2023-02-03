import React from 'react'
import aguacate from '../../assets/joly/Gallery2/aguacate.jpg'
import tomate from '../../assets/joly/Gallery2/tomate.jpg'
import cebolla from '../../assets/joly/Gallery2/cebolla.jpg'
import aceite from '../../assets/joly/Gallery2/aceite.jpg'
import cilantro from '../../assets/joly/Gallery2/cilantro.jpg'
import zumo from '../../assets/joly/Gallery2/zumo.jpg'
import chile from '../../assets/joly/Gallery2/chile.jpg'
import pimienta from '../../assets/joly/Gallery2/pimienta.jpg'
import sal from '../../assets/joly/Gallery/sal.webp'
import jalapeño from '../../assets/joly/Gallery2/jalapeño.jfif'


const GalleryGuacamole = () => {
  return (
    <section className='gallery-hummus'>
        <div className=''>
            <img src={aguacate} alt="aguacate" />
            <ul>
                <li>2 aguacates en su punto</li>
            </ul>
        </div>
        <div className='prep2'>
            <img src={tomate} alt="tomáte" />
            <ul>
                <li>1 tomate maduro</li>
            </ul>
        </div>
        <div className='prep3'>
            <img src={cebolla} alt="cebollla" />
            <ul>
                <li>1 cebolla tierna grande o dos pequeñas</li>
            </ul>
        </div>
        <div className='prep4'>
            <img src={aceite} alt="aceite" />
            <ul>
                <li>1 cda aceite de oliva virgen light</li>
            </ul>
        </div>
        <div className='prep5'>
            <img src={cilantro} alt="Cilantro" />
            <ul>
                <li>unas ramitas de cilantro</li>
            </ul>
        </div>
        <div className='prep6'>
            <img src={zumo} alt="Limón" />
            <ul>
                <li>zumo de limón</li>
            </ul>
        </div>
        <div className='prep7'>
            <img src={chile} alt="Chile" />
            <ul>
                <li>1 Chile</li>
            </ul>
        </div>
        <div className='prep8'>
            <img src={pimienta} alt="pimienta" />
            <ul>
                <li>pimienta negra</li>
            </ul>
        </div>
        <div className='prep9'>
            <img src={sal} alt="sal" />
            <ul>
                <li>sal</li>
            </ul>
        </div>
        <div className='prep10'>
            <img src={jalapeño} alt="jalapeño" />
            <ul>
                <li>jalapeño</li>
            </ul>
        </div>
    </section>
    
  )
}

export default GalleryGuacamole