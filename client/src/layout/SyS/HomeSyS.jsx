import React from 'react'
import Adds from '../../components/SYS/Adds'
import Mainsys from '../../components/SYS/Mainsys'
import HeaderSyS from '../../helper/HeaderSyS'

const HomeSyS = () => {
  return (
    <section className='container-sys'>
      <HeaderSyS />
    <section className='home-sys'>
      <Mainsys />
      <Adds />
    </section>
    </section>
  )
}

export default HomeSyS