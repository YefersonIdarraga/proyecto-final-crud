import React from 'react'

const AñadirCliente = () => {
  return (
    <section className='form-add-client'>
        <form action="">
            <input type="text" placeholder='Documento' />
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido' />
            <input type="text" placeholder='Telefono' />
            <input type="text" placeholder='Correo' />
            <input type="text" placeholder='Barrio' />
            <input type="text" placeholder='Dirección' />
            <input type="text" placeholder='URL Foto' />
            <input className='registrarJ' type="submit" value='Registrar'/>
        </form>
    </section>
  )
}

export default AñadirCliente