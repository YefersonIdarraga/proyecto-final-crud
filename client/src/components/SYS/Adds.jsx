import React from 'react'
import uñas1 from '../../assets/sys/Adds/1uñas.webp'
import uñas2 from '../../assets/sys/Adds/2uñas.webp'
import uñas3 from '../../assets/sys/Adds/3uñas.jpg'
import uñas4 from '../../assets/sys/Adds/4uñas.jpg'
import uñas5 from '../../assets/sys/Adds/5uñas.webp'
import uñas6 from '../../assets/sys/Adds/6uñas.webp'

const Adds = () => {
  return (
    <section className='add'>
      <div className='div-add'>
        <img src={uñas1} alt="img-add" />
      </div>
      <div className='div-add'>
        <img src={uñas2} alt="img-add" />
      </div>
      <div className='div-add'>
        <img src={uñas3} alt="img-add" />
      </div>
      <div className='div-add'>
        <img src={uñas4} alt="img-add" />
      </div>
      <div className='div-add'>
        <img src={uñas5} alt="img-add" />
      </div>
      <div className='div-add'>
        <img src={uñas6} alt="img-add" />
      </div>
    </section>
  )
}

export default Adds