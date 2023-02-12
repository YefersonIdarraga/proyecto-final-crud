import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderJoly from '../../../helper/HeaderJoly'
import axios from 'axios'
const urlProductos = 'http://localhost:3100/productos'

const AñadirProductoJ = () => {
  const inputs = document.querySelectorAll('#form-clientJ input')
  const nombrej = document.getElementById('nombre')
  const descripcionj = document.getElementById('descripcion')
  const valorj = document.getElementById('valor')
  const cantidadj = document.getElementById('cantidad')
  const fechaVencimientoj = document.getElementById('fechaVencimiento')
  const est_nom = document.getElementById('est-nom')
  const est_des = document.getElementById('est-des')
  const est_val = document.getElementById('est-val')
  const est_can = document.getElementById('est-can')
  const est_fec = document.getElementById('est-fec')

  const [vNom, setVnom] = useState(false)
  const [vDes, setVdes] = useState(false)
  const [vVal, setVval] = useState(false)
  const [vCan, setVcan] = useState(false)
  const [vFec, setVfec] = useState(false)
    
  const letras = /^([A-Za-z]){4,20}$/gm
  const num = /^[0-9]/
  const date = /^(?:3[01]|[12][0-9]|0?[1-9])([-/.])(0?[1-9]|1[1-2])\1\d{4}$/

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
          case "fechaVencimiento":
              if (date.test(e.target.value)) {
                  setVfec(true)
                  est_fec.textContent = ""
              } else {
                  setVfec(false)
                  est_fec.textContent = "Siga la estructura correcta para las fechas dd/mm/yyyy"
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
  const [fechaVencimiento, setFechaVencimiento] = useState("")
  const navigate = useNavigate()

  const añadirProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      fechaVencimiento,
    }
    if (!letras.test(nombrej.value, descripcionj.value)||!num.test(valorj.value, cantidadj.value)||!date.test(fechaVencimientoj.value)){
      e.preventDefault()
    } else {
      await axios.post(urlProductos, producto)
      navigate("/productos-joly")
    }
  }
  return (
    <section className='container-formClientJ'>
      <HeaderJoly />
      <h1>Agregar producto</h1>
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <i className={vNom ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <p className='estado' id='est-nom'></p>
          <div className='div-form'>   
            <input className='inputJ' id='descripcion' name='descripcion' type="text" placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
            <i className={vDes ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <p className='estado' id='est-des'></p>
          <div className='div-form'>   
            <input className='inputJ' id='valor' name='valor' type="text" placeholder='Valor' onChange={(e) => setValor(e.target.value)} value={valor} />
            <i className={vVal ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <p className='estado' id='est-val'></p>
          <div className='div-form'>   
            <input className='inputJ' id='cantidad' name='cantidad' type="text" placeholder='Cantidad' onChange={(e) => setCantidad(e.target.value)} value={cantidad} />
            <i className={vCan ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <p className='estado' id='est-can'></p>
          <div className='div-form'>   
            <input className='inputJ' id='fechaVencimiento' name='fechaVencimiento' type="text" placeholder='Fecha de vencimiento' onChange={(e) => setFechaVencimiento(e.target.value)} value={fechaVencimiento} />
            <i className={vFec ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <p className='estado' id='est-fec'></p>
            <Link className='cancelarJ' to={'/productos-joly'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Añadir producto' onClick={añadirProducto} />
        </form>
    </section>
    </section>
  )
}

export default AñadirProductoJ