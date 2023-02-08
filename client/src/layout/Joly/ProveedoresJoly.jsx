import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderJoly from '../../helper/HeaderJoly'
const urlProveedores = 'http://localhost:3100/proveedores'

const ProveedoresJoly = () => {
  const [proveedores, setProveedores] = useState([])

  useEffect(() =>{
    mostrarProveedores()
  }, [])

  const mostrarProveedores = async () => {
    const res = await axios.get(urlProveedores)
    setProveedores(res.data)
  }

  const eliminarProveedor = async (id) => {
    await axios.delete(`${urlProveedores}/${id}`)
    mostrarProveedores()
  }
  return (
    <section>
        <HeaderJoly />
        <div className='container-clientesj'>
          <div className='add-client'>
              <Link className='add-clientB' to={'/añadir-proveedorj'}>Añadir proveedor</Link>
          </div>
          <div className="table-clientesj">
            <h1>Proveedores Joly</h1>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>NIT</th>
                  <th>Nombre Representante</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Direccion</th>
                  <th>Logo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {proveedores.map((proveedor) => (
                <tr>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.nit}</td>
                  <td>{proveedor.nombreRepresentante}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.correo}</td>
                  <td>{proveedor.direccion}</td>
                  <td>
                    <img src={`${proveedor.logo}`} alt="Logo" />
                  </td>
                  <td>
                    <button className='trash' onClick={() =>eliminarProveedor(proveedor.id)}><i class="fa-solid fa-trash"></i></button>
                    <Link className='edit-client' to={`/editar-proveedorj/${proveedor.id}`}><i class="fa-solid fa-file-pen"></i></Link>
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

export default ProveedoresJoly