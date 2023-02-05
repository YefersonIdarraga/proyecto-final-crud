import React from 'react'
import { useState } from 'react'
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia. Laborum provident asperiores magni eaque fugit libero quam incidunt consequuntur, illum dolores iure, quidem perferendis assumenda quis ea voluptatem voluptas.
            </p>
            </Modal>
          </div>
          <div className="table-clientes">
            <table>
              <thead>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
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
              </tbody>
            </table>
          </div>
        </div>
    </section>
  )
}

export default ClientesJoly