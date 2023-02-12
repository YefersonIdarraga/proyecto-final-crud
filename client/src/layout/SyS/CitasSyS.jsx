import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderSyS from '../../helper/HeaderSyS.jsx'

const urlCitas = 'http://localhost:3101/citas'

const CitasSyS = () => {

  const [citas, setCitas] = useState([])
  
  useEffect(() =>{
    mostrarCitas()
  }, [])

  const mostrarCitas = async () => {
    const res = await axios.get(urlCitas)
    setCitas(res.data)
  }

  const eliminarCita = async (id) => {
    await axios.delete(`${urlCitas}/${id}`)
    mostrarCitas()
  }
  return (
    <section>
        <HeaderSyS />
        <div className='container-clientesj'>
          <div className='add-client'>
              <Link className='add-clientB' to={'/añadir-citas'}>Añadir citas</Link>
          </div>
          <div className="table-clientesj">
            <h1>Citas SyS</h1>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Lugar</th>
                  <th>Nombre del servicio</th>
                  <th>Descripcion cliente</th>
                  <th>Imagen cliente</th>
                  <th>direccion cliente</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {citas.map((cita) => (
                <tr>
                  <td>{cita.fecha}</td>
                  <td>{cita.lugar}</td>
                  <td>{cita.nombreServicio}</td>
                  <td>{cita.descripcionServicio}</td>
                  <td>
                    <img src={`${cita.imgCliente}`} alt="Foto" />
                  </td>
                  <td>{cita.direccionCliente}</td>                 
                  <td>
                    <button className='trash' onClick={() =>eliminarCita(cita.id)}><i class="fa-solid fa-trash"></i></button>
                    <Link className='edit-client' to={`/editar-cita/${cita.id}`}><i class="fa-solid fa-file-pen"></i></Link>
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

export default CitasSyS