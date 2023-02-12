import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderSyS from '../../helper/HeaderSyS'

const urlClientes = 'http://localhost:3101/clientes'

const ClientesSyS = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() =>{
    mostrarClientes()
  }, [])

  const mostrarClientes = async () => {
    const res = await axios.get(urlClientes)
    setClientes(res.data)
  }

  const eliminarCliente = async (id) => {
    await axios.delete(`${urlClientes}/${id}`)
    mostrarClientes()
  }
  return (
    <section>
        <HeaderSyS />
        <div className='container-clientesj container-sys'>
          <div className='add-client'>
              <Link className='add-clientB' to={'/añadir-clientesys'}>Añadir cliente</Link>
          </div>
          <div className="table-clientesj table-clientess">
            <h1>Clientes SyS</h1>
            <table>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Barrio</th>
                  <th>Dirección</th>
                  <th>Foto</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                <tr>
                  <td>{cliente.documento}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.apellido}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.barrio}</td>
                  <td>{cliente.direccion}</td>
                  <td>
                    <img src={`${cliente.foto}`} alt="Foto" />
                  </td>
                  <td>
                    <button className='trash' onClick={() =>eliminarCliente(cliente.id)}><i class="fa-solid fa-trash"></i></button>
                    <Link className='edit-client' to={`/editar-clientesys/${cliente.id}`}><i class="fa-solid fa-file-pen"></i></Link>
                  </td>
                </tr> 
                ))} 
              </tbody>
            </table>
          </div>
        </div>
    </section>
  )
}

export default ClientesSyS