import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import HeaderSyS from '../../../helper/HeaderSyS'
const urlProductos = 'http://localhost:3101/productos'

const AñadirProductoS = () => {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [valor, setValor] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [imagenproducto, setImagenproducto] = useState("")
  const navigate = useNavigate()

  const añadirProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      imagenproducto,
    }
    await axios.post(urlProductos, producto)
    navigate("/productos-sys")
  }
  return (
    <section className='container-formClientJ'>
      <HeaderSyS />
      <h1>Agregar producto</h1>
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
            <input className='inputJ' id='imagenproducto' name='imagenproducto' type="text" placeholder='Imagen del producto' onChange={(e) => setImagenproducto(e.target.value)} value={imagenproducto} />
            <div className='estado' id='est-ape'></div>
          </div>
            <Link className='cancelarJ' to={'/productos-sys'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Añadir producto' onClick={añadirProducto} />
        </form>
    </section>
    </section>
  )
}

export default AñadirProductoS