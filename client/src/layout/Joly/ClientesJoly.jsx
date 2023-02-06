import React from 'react'
import { useState } from 'react'
import AñadirCliente from '../../components/JOLY/AñadirCliente'
import HeaderJoly from '../../helper/HeaderJoly'
import Modal from '../Modal'


const ClientesJoly = () => {
  const [mostrar, setMostrar] = useState(false)
  return (
    <section>
        <HeaderJoly />
        <div className='container-clientesj'>
          <div className='add-client'>
              <button className='add-clientB' onClick={()=> setMostrar(true)}>Añadir cliente</button>
            <Modal isOpen={mostrar} onClose={()=> setMostrar(false)}>
            <p>
              <AñadirCliente />
            </p>
            </Modal>
          </div>
          <div className="table-clientesj">
            <h1>Clientes Joly</h1>
            <table>
              <thead>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Barrio</th>
                <th>Dirección</th>
                <th>Foto</th>
                <th></th>
              </thead>
              <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className='trash'><i class="fa-solid fa-trash"></i></button>
                  <button className='edit-client'><i class="fa-solid fa-user-pen"></i></button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
    </section>
  )
}

export default ClientesJoly