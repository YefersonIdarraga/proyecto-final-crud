import React from 'react'
import manicure1 from '../../assets/sys/Gallery/1manicure.webp'
import manicure2 from '../../assets/sys/Gallery/2manicure.jpg'
import manicure3 from '../../assets/sys/Gallery/3manicure.webp'
import manicure4 from '../../assets/sys/Gallery/4manicure.jpg'

const Gallerysys = () => {
  return (
    <section className='gallery'>
        <img src={manicure1} alt="img-gallery" />
        <img src={manicure2} alt="img-gallery" />
        <img src={manicure3} alt="img-gallery" />
        <img src={manicure4} alt="img-gallery" />
    </section>
  )
}

export default Gallerysys