import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderJoly from '../../../helper/HeaderJoly'
const urlProveedores = 'http://localhost:3100/proveedores'

const EditarProveedoresJ = () => {
    const [nombre, setNombre] = useState("")
    const [nit, setNit] = useState("")
    const [nombreRepresentante, setNombreRepresentante] = useState("")
    const [telefono, setTelefono] = useState("")
    const [correo, setCorreo] = useState("")
    const [direccion, setDireccion] = useState("")
    const [logo, setLogo] = useState("")
  const navigate = useNavigate()
  const { id } = useParams();

  const actualizarProveedor = async (e) => {
    e.preventDefault()
    const proveedor = {
        nombre,
        nit,
        nombreRepresentante,
        telefono,
        correo,
        direccion,
        logo
    }
    await axios.put(`${urlProveedores}/${id}`, proveedor)
    navigate("/proveedores-joly")
  }

  useEffect(() => {
    listarProveedor()
  }, [])

  const listarProveedor = async () =>{
    const res = await axios.get(`${urlProveedores}/${id}`)
    setNombre(res.data.nombre)
    setNit(res.data.nit)
    setNombreRepresentante(res.data.nombreRepresentante)
    setTelefono(res.data.telefono)
    setCorreo(res.data.correo)
    setDireccion(res.data.direccion)
    setLogo(res.data.logo)
  }
  return (
<section className='container-formClientJ'>
      <HeaderJoly />
      <h1>Actualizar proveedor</h1>
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <div className='estado' id='est-doc'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='nit' name='nit' type="text" placeholder='NIT' onChange={(e) => setNit(e.target.value)} value={nit} />
            <div className='estado' id='est-nom'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='nombreRepresentante' name='nombreRepresentante' type="text" placeholder='Nombre del Representante' onChange={(e) => setNombreRepresentante(e.target.value)} value={nombreRepresentante} />
            <div className='estado' id='est-tel'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='telefono' name='telefono' type="text" placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            <div className='estado' id='est-cor'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='correo' name='correo' type="text" placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} value={correo} />
            <div className='estado' id='est-ape'></div>
          </div>
          <div className='div-form'>   
            <input className='inputJ' id='direccion' name='direccion' type="text" placeholder='Direccion' onChange={(e) => setDireccion(e.target.value)} value={direccion} />
            <div className='estado' id='est-ape'></div>
          </div>
          <div className='div-form'>   
            <input className='inputJ' id='logo' name='logo' type="text" placeholder='Logo' onChange={(e) => setLogo(e.target.value)} value={logo} />
            <div className='estado' id='est-ape'></div>
          </div>
            <Link className='cancelarJ' to={'/proveedores-joly'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Actualizar proveedor' onClick={actualizarProveedor} />
        </form>
    </section>
    </section>
  )
}

export default EditarProveedoresJ