import React from 'react'
import garbanzos from '../../assets/joly/Gallery/garbanzos.webp'
import tahini from '../../assets/joly/Gallery/tahini-light.jpg'
import agua from '../../assets/joly/Gallery/agua.webp'
import aceite from '../../assets/joly/Gallery/aceite.jpg'
import limon from '../../assets/joly/Gallery/limon.jpg'
import ajo from '../../assets/joly/Gallery/ajo.jpg'
import sal from '../../assets/joly/Gallery/sal.webp'
import paprika from '../../assets/joly/Gallery/paprika.jpg'

const GalleryHummus = () => {
  return (
    <section className='gallery-hummus'>
        <div className='prep1'>
            <img src={garbanzos} alt="garbanzos" />
            <ul>
                <li>1 lata garbanzos 15.5 oz. (439 gr.) colados</li>
            </ul>
        </div>
        <div className='prep2'>
            <img src={tahini} alt="tahini" />
            <ul>
                <li>1 taza tahini light</li>
            </ul>
        </div>
        <div className='prep3'>
            <img src={agua} alt="agua" />
            <ul>
                <li>7 cucharadas agua helada ó más si hace falta</li>
            </ul>
        </div>
        <div className='prep4'>
            <img src={aceite} alt="aceite" />
            <ul>
                <li>1 cda aceite de oliva virgen light</li>
            </ul>
        </div>
        <div className='prep5'>
            <img src={limon} alt="limon" />
            <ul>
                <li>1 limón amarillo (zumo)</li>
            </ul>
        </div>
        <div className='prep6'>
            <img src={ajo} alt="ajo" />
            <ul>
                <li>2 dientes ajo sin piel enteros o cortados</li>
            </ul>
        </div>
        <div className='prep7'>
            <img src={sal} alt="sal" />
            <ul>
                <li>1 1/4 cucharaditas sal regular o al gusto</li>
            </ul>
        </div>
        <div className='prep8'>
            <img src={paprika} alt="paprika" />
            <ul>
                <li>pizca paprika picante o ahumada (opcional) para adornar</li>
            </ul>
        </div>
    </section>
  )
}

export default GalleryHummus