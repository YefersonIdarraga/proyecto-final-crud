import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderJoly from '../../../helper/HeaderJoly'
const urlProductos = 'http://localhost:3100/productos'

const EditarProductoJ = () => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [valor, setValor] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [fechaVencimiento, setFechaVencimiento] = useState("")
  const navigate = useNavigate()
  const { id } = useParams();

  const actualizarProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      fechaVencimiento
    }
    await axios.put(`${urlProductos}/${id}`, producto)
    navigate("/productos-joly")
  }

  useEffect(() => {
    listarProducto()
  }, [])

  const listarProducto = async () =>{
    const res = await axios.get(`${urlProductos}/${id}`)
    setNombre(res.data.nombre)
    setDescripcion(res.data.descripcion)
    setValor(res.data.valor)
    setCantidad(res.data.cantidad)
    setFechaVencimiento(res.data.fechaVencimiento)
  }
  return (
    <section className='container-formClientJ'>
      <HeaderJoly />
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <div className='estado' id='est-doc'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='descripcion' name='descripcion' type="text" placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
            <div className='estado' id='est-nom'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='valor' name='valor' type="text" placeholder='Valor' onChange={(e) => setValor(e.target.value)} value={valor} />
            <div className='estado' id='est-tel'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='cantidad' name='cantidad' type="text" placeholder='Cantidad' onChange={(e) => setCantidad(e.target.value)} value={cantidad} />
            <div className='estado' id='est-cor'></div>
          </div> 
          <div className='div-form'>   
            <input className='inputJ' id='fechaVencimiento' name='fechaVencimiento' type="text" placeholder='Fecha de vencimiento' onChange={(e) => setFechaVencimiento(e.target.value)} value={fechaVencimiento} />
            <div className='estado' id='est-ape'></div>
          </div>
            <Link className='cancelarJ' to={'/productos-joly'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Actualizar producto' onClick={actualizarProducto} />
        </form>
    </section>
    </section>
  )
}

export default EditarProductoJ