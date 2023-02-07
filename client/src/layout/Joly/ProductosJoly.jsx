import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderJoly from '../../helper/HeaderJoly'
const urlProductos = 'http://localhost:3100/productos'


const ProductosJoly = () => {
  const [productos, setProductos] = useState([])

  useEffect(() =>{
    mostrarProductos()
  }, [])

  const mostrarProductos = async () => {
    const res = await axios.get(urlProductos)
    setProductos(res.data)
  }

  const eliminarProducto = async (id) => {
    await axios.delete(`${urlProductos}/${id}`)
    mostrarProductos()
  }

  return (
    <section>
        <HeaderJoly />
        <div className='container-clientesj'>
          <div className='add-client'>
              <Link className='add-clientB' to={'/añadir-productoj'}>Añadir producto</Link>
          </div>
          <div className="table-clientesj">
            <h1>Productos Joly</h1>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Fecha vencimiento</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                <tr>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.valor}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.fechaVencimiento}</td>
                  <td>
                    <button className='trash' onClick={() =>eliminarProducto(producto.id)}><i class="fa-solid fa-trash"></i></button>
                    <Link className='edit-client' to={`/editar-productoj/${producto.id}`}><i class="fa-solid fa-file-pen"></i></Link>
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

export default ProductosJoly