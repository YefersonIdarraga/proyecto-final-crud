import React from 'react'
import HeaderJoly from '../helper/HeaderJoly'

const Error = () => {
  return (
    <section>
      <HeaderJoly />
      <section className='error404'>
          <div>
            <h1>ERROR 404</h1>
            <p>Page not Found</p>
          </div>
      </section>
    </section>
  )
}

export default Error