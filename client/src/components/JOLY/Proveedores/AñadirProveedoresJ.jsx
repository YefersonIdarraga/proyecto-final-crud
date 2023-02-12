import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderJoly from '../../../helper/HeaderJoly'
import axios from 'axios'
const urlProveedores = 'http://localhost:3100/proveedores'

const AñadirProveedoresJ = () => {
  const inputs = document.querySelectorAll('#form-clientJ input')
  const nombrej = document.getElementById('nombre')
  const nitj = document.getElementById('nit')
  const nombreRepresentantej = document.getElementById('nombreRepresentante')
  const telefonoj = document.getElementById('telefono')
  const correoj = document.getElementById('correo')
  const direccionj = document.getElementById('direccion')
  const logoj = document.getElementById('logo')
  const est_nom = document.getElementById('est-nom')
  const est_nit = document.getElementById('est-nit')
  const est_rep = document.getElementById('est-rep')
  const est_tel = document.getElementById('est-tel')
  const est_cor = document.getElementById('est-cor')
  const est_dir = document.getElementById('est-dir')
  const est_log = document.getElementById('est-log')

  const [vNom, setVnom] = useState(false)
  const [vNit, setVnit] = useState(false)
  const [vRep, setVrep] = useState(false)
  const [vTel, setVtel] = useState(false)
  const [vCor, setVcor] = useState(false)
  const [vDir, setVdir] = useState(false)
  const [vLog, setVlog] = useState(false)
    
  const letras = /^([A-Za-z]){4,20}$/gm
  const letraNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
  const cel = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g
  const documentId = /^[0-9]{1,12}$/
  const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
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
          case "nit":
              if (letraNum.test(e.target.value)) {
                  setVnit(true)
                  est_nit.textContent=""
              } else {
                  setVnit(false)
                  est_nit.textContent="Se permiten numeros y letras"
              }
              break;
          case "nombreRepresentante":
          if (letras.test(e.target.value)) {
              setVrep(true)
              est_rep.textContent = ""
          } else {
              setVrep(false)
              est_rep.textContent = "Solo se permiten letras"
          }
          break;
          case "telefono":
              if (cel.test(e.target.value)) {
                  setVtel(true)
                  est_tel.textContent = ""
              } else {
                  setVtel(false)
                  est_tel.textContent = "Se permiten numeros, y caracteres especiales."
              }
              break;
          case "correo":
            if (email.test(e.target.value)) {
              setVcor(true)
              est_cor.textContent = ""
            } else {
              setVcor(false)
              est_cor.textContent = "Estructura de correo invalida."
            }
            break;
          case "direccion":
              if (letraNum.test(e.target.value)) {
                  setVdir(true)
                  est_dir.textContent = ""
              } else {
                  setVdir(false)
                  est_dir.textContent = "Se permiten numeros, letras y caracteres especiales."
              }
              break;
          case "logo":
              if (url.test(e.target.value)) {
                  setVlog(true)
                  est_log.textContent = ""
              } else {
                  setVlog(false)
                  est_log.textContent = "Ingrese la direccion url correctamente."
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
  const [nit, setNit] = useState("")
  const [nombreRepresentante, setNombreRepresentante] = useState("")
  const [telefono, setTelefono] = useState("")
  const [correo, setCorreo] = useState("")
  const [direccion, setDireccion] = useState("")
  const [logo, setLogo] = useState("")
  const navigate = useNavigate()

  const añadirProveedor = async (e) => {
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
    if (!letras.test(nombrej.value, nombreRepresentantej.value)||!cel.test(telefonoj.value)||!letraNum.test(nitj.value, direccionj.value)||!email.test(correoj.value)||!url.test(logoj.value)){
      e.preventDefault()
    } else {
      await axios.post(urlProveedores, proveedor)
      navigate("/proveedores-joly")
    }
  }
  return (
    <section className='container-formClientJ'>
      <HeaderJoly />
      <h1>Agregar proveedor</h1>
    <section className='form-add-client'>
        <form action="" id='form-clientJ'>
          <div className='div-form'>   
            <input className='inputJ' id='nombre' name='nombre' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <i className={vNom ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-nom'></div>
          <div className='div-form'>   
            <input className='inputJ' id='nit' name='nit' type="text" placeholder='NIT' onChange={(e) => setNit(e.target.value)} value={nit} />
            <i className={vNit ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-nit'></div>
          <div className='div-form'>   
            <input className='inputJ' id='nombreRepresentante' name='nombreRepresentante' type="text" placeholder='Nombre del Representante' onChange={(e) => setNombreRepresentante(e.target.value)} value={nombreRepresentante} />
            <i className={vRep ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-rep'></div>
          <div className='div-form'>   
            <input className='inputJ' id='telefono' name='telefono' type="text" placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            <i className={vTel ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div> 
          <div className='estado' id='est-tel'></div>
          <div className='div-form'>   
            <input className='inputJ' id='correo' name='correo' type="text" placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} value={correo} />
            <i className={vCor ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <div className='estado' id='est-cor'></div>
          <div className='div-form'>   
            <input className='inputJ' id='direccion' name='direccion' type="text" placeholder='Direccion' onChange={(e) => setDireccion(e.target.value)} value={direccion} />
            <i className={vDir ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <div className='estado' id='est-dir'></div>
          <div className='div-form'>   
            <input className='inputJ' id='logo' name='logo' type="text" placeholder='Logo' onChange={(e) => setLogo(e.target.value)} value={logo} />
            <i className={vLog ? 'fa-solid fa-check' : 'fa-solid fa-circle-exclamation'}></i>
          </div>
          <div className='estado' id='est-log'></div>
            <Link className='cancelarJ' to={'/proveedores-joly'}>Cancelar</Link>
            <input id='registrar' className='registrarJ' type="submit" value='Añadir proveedor' onClick={añadirProveedor} />
        </form>
    </section>
    </section>
  )
}

export default AñadirProveedoresJ