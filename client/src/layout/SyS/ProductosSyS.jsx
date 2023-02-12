import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderSyS from '../../helper/HeaderSyS'
const urlProductos = 'http://localhost:3101/productos'


const ProductosSyS = () => {
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
        <HeaderSyS />
        <div className='container-clientesj container-sys'>
          <div className='add-client'>
              <Link className='add-clientB' to={'/añadir-producto'}>Añadir producto</Link>
          </div>
          <div className="table-clientesj table-clientess">
            <h1>Productos SYS</h1>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Imagen Producto</th>
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
                  <td>
                    <img src={`${producto.imagenproducto}`} alt="Foto" />
                  </td>
                  <td>
                    <button className='trash' onClick={() =>eliminarProducto(producto.id)}><i class="fa-solid fa-trash"></i></button>
                    <Link className='edit-client' to={`/editar-producto/${producto.id}`}><i class="fa-solid fa-file-pen"></i></Link>
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

export default ProductosSyS