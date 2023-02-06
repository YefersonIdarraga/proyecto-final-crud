import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderJoly from '../../../helper/HeaderJoly'
const urlClientes = 'http://localhost:3100/clientes'

const EditarCliente = () => {
  const [documento, setDocumento] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [correo, setCorreo] = useState("")
  const [barrio, setBarrio] = useState("")
  const [direccion, setDireccion] = useState("")
  const [foto, setFoto] = useState("")
  const navigate = useNavigate()
  const { id } = useParams();

  const actualizarCliente = async (e) => {
    e.preventDefault()
    const cliente = {
      documento,
      nombre,
      apellido,
      telefono,
      correo,
      barrio,
      direccion,
      foto,
    }
    await axios.put(`${urlClientes}/${id}`, cliente)
    navigate("/clientes-joly")
  }

  useEffect(() => {
    listarCliente()
  }, [])

  const listarCliente = async () =>{
    const res = await axios.get(`${urlClientes}/${id}`)
    setDocumento(res.data.documento)
    setNombre(res.data.nombre)
    setApellido(res.data.apellido)
    setTelefono(res.data.telefono)
    setCorreo(res.data.correo)
    setBarrio(res.data.barrio)
    setDireccion(res.data.direccion)
    setFoto(res.data.foto)
  }
  return (
    <section className='container-formClientJ'>
      <HeaderJoly />
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='documento' name='documento' type="text" placeholder='Documento' onChange={(e) => setDocumento(e.target.value)} value={documento} />
            <div className='estado' id='est-doc'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <div className='estado' id='est-nom'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='apellido' name='apellido' type="text" placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} value={apellido} />
            <div className='estado' id='est-ape'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='telefono' name='telefono' type="text" placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            <div className='estado' id='est-tel'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='correo' name='correo' type="text" placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} value={correo} />
            <div className='estado' id='est-cor'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='barrio' name='barrio' type="text" placeholder='Barrio' onChange={(e) => setBarrio(e.target.value)} value={barrio} />
            <div className='estado' id='est-bar'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='direccion' name='direccion' type="text" placeholder='Dirección' onChange={(e) => setDireccion(e.target.value)} value={direccion} />
            <div className='estado' id='est-dir'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='foto' name='foto' type="text" placeholder='URL Foto' onChange={(e) => setFoto(e.target.value)} value={foto} />
            <div className='estado' id='est-fot'></div>
          </div>
            <Link className='cancelarJ' to='/clientes-joly'>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Actualizar' onClick={actualizarCliente} />
        </form>
    </section>
    </section>
  )
}

export default EditarCliente