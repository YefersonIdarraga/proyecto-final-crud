import React from 'react'
import Mainjoly from '../../components/JOLY/Mainjoly'
import FooterJoly from '../../helper/FooterJoly'
import HeaderJoly from '../../helper/HeaderJoly'

const HomeJoly = () => {
  return (
    <section className='container-joly'>
        <HeaderJoly />
        <Mainjoly />
        <FooterJoly />
    </section>
  )
}

export default HomeJoly