import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import HeaderSyS from '../../../helper/HeaderSyS'
const urlProductos = 'http://localhost:3101/productos'

const AñadirProductoS = () => {
  const inputs = document.querySelectorAll('#form-clientJ input')
  const nombrej = document.getElementById('nombre')
  const descripcionj = document.getElementById('descripcion')
  const valorj = document.getElementById('valor')
  const cantidadj = document.getElementById('cantidad')
  const imagenj = document.getElementById('imagen')
  const est_nom = document.getElementById('est-nom')
  const est_des = document.getElementById('est-des')
  const est_val = document.getElementById('est-val')
  const est_can = document.getElementById('est-can')
  const est_img = document.getElementById('est-img')

  const [vNom, setVnom] = useState(false)
  const [vDes, setVdes] = useState(false)
  const [vVal, setVval] = useState(false)
  const [vCan, setVcan] = useState(false)
  const [vImg, setVimg] = useState(false)
    
  const letras = /^([A-Za-z]){4,20}$/gm
  const num = /^[0-9]/
  const url = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

  const validarFormulario = (e)=>{
      switch (e.target.name) {
          case "nombre":
              if(letras.test(e.target.value)){
                  setVnom(true)
                  est_nom.textContent=""
              } else {
                  setVnom(false)
                  est_nom.textContent="Solo se permiten letras, guion y guion bajo; minimo 4 y maximo 20 caracteres."
              }
              break;
          case "descripcion":
              if (letras.test(e.target.value)) {
                  setVdes(true)
                  est_des.textContent = ""
              } else {
                  setVdes(false)
                  est_des.textContent="Solo se permiten letras."
              }
              break;
          case "valor":
              if (num.test(e.target.value)) {
                  setVval(true)
                  est_val.textContent = ""
              } else {
                  setVval(false)
                  est_val.textContent = "Solo se permiten numeros"
              }
              break;
          case "cantidad":
              if (num.test(e.target.value)) {
                  setVcan(true)
                  est_can.textContent = ""
              } else {
                  setVcan(false)
                  est_can.textContent = "Solo se permiten numeros"
              }
              break;
          case "imagen":
              if (url.test(e.target.value)) {
                  setVimg(true)
                  est_img.textContent = ""
              } else {
                  setVimg(false)
                  est_img.textContent = "Direccion incorrecta"
              }
              break;
      }
  };

  inputs.forEach((input)=>{
      input.addEventListener('keyup', validarFormulario);
      input.addEventListener('blur', validarFormulario);
  });
  //CREAR
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
    if (!letras.test(nombrej.value, descripcionj.value)||!num.test(valorj.value, cantidadj.value)||!url.test(imagenj.value)){
      e.preventDefault()
    } else {
      await axios.post(urlProductos, producto)
      navigate("/productos-sys")
    }
  }
  return (
    <section className='container-formClientJ container-sys'>
      <HeaderSyS />
      <h1>Agregar producto</h1>
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <i className={vNom ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-nom'></div>
          <div className='div-form'>   
            <input className='inputJ' id='descripcion' name='descripcion' type="text" placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
            <i className={vDes ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-des'></div>
          <div className='div-form'>   
            <input className='inputJ' id='valor' name='valor' type="text" placeholder='Valor' onChange={(e) => setValor(e.target.value)} value={valor} />
            <i className={vVal ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-val'></div>
          <div className='div-form'>   
            <input className='inputJ' id='cantidad' name='cantidad' type="text" placeholder='Cantidad' onChange={(e) => setCantidad(e.target.value)} value={cantidad} />
            <i className={vCan ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-can'></div>
          <div className='div-form'>   
            <input className='inputJ' id='imagen' name='imagen' type="text" placeholder='Imagen del producto' onChange={(e) => setImagenproducto(e.target.value)} value={imagenproducto} />
            <i className={vImg ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <div className='estado' id='est-img'></div>
            <Link className='cancelarJ' to={'/productos-sys'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Añadir producto' onClick={añadirProducto} />
        </form>
    </section>
    </section>
  )
}

export default AñadirProductoS