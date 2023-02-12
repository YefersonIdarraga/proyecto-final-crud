import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderJoly from '../../../helper/HeaderJoly'
import HeaderSyS from '../../../helper/HeaderSyS'
const urlProductos = 'http://localhost:3101/productos'

const EditarProductoS = () => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [valor, setValor] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [imagenproducto, setImagenproducto] = useState("")
  const navigate = useNavigate()
  const { id } = useParams();

  const actualizarProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      imagenproducto
    }
    await axios.put(`${urlProductos}/${id}`, producto)
    navigate("/productos-sys")
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
    setImagenproducto(res.data.imagenproducto)
  }
  return (
    <section className='container-formClientJ'>
      <HeaderSyS />
      <h1>Actualizar producto</h1>
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
            <input className='inputJ' id='imagenproducto' name='imagenproducto' type="text" placeholder='Imagen del Producto' onChange={(e) => setImagenproducto(e.target.value)} value={imagenproducto} />
            <div className='estado' id='est-ape'></div>
          </div>
            <Link className='cancelarJ' to={'/productos-sys'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Actualizar producto' onClick={actualizarProducto} />
        </form>
    </section>
    </section>
  )
}

export default EditarProductoS