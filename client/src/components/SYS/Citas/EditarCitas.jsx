import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderSyS from '../../../helper/HeaderSyS'
const urlCitas = 'http://localhost:3101/citas'

const EditarCitas = () =>
{
  const inputs = document.querySelectorAll('#form-clientJ input')
  const fechasys = document.getElementById("fecha");
  const lugarsys = document.getElementById("lugar");
  const nombresys = document.getElementById("Nombreser");
  const descripcionsys = document.getElementById("Descripcionser");
  const fotosys = document.getElementById("foto");
  const direccionsys = document.getElementById("Direccioncli");
  const est_fec = document.getElementById("est-doc");
  const est_lug = document.getElementById("est-nom");
  const est_nom = document.getElementById("est-ape");
  const est_des = document.getElementById("est-tel");
  const est_fot = document.getElementById("est-fot");
  const est_dir = document.getElementById("est-dir");

  const [vFec, setVfec] = useState(false);
  const [vLug, setVlug] = useState(false);
  const [vNom, setVnom] = useState(false);
  const [vDes, setVdes] = useState(false);
  const [vFot, setVfot] = useState(false);
  const [vDir, setVdir] = useState(false);
    
  const letras = /^([A-Za-z]){4,20}$/gm;
  const letraNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
  const url = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;


  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "fecha":
        if (letraNum.test(e.target.value)) {
          setVfec(true);
          est_fec.textContent = "";
        } else {
          setVfec(false);
          est_fec.textContent =
            "Se permiten números y letras.";
        }
        break;
      case "lugar":
        if (letras.test(e.target.value)) {
          setVlug(true);
          est_lug.textContent = "";
        } else {
          setVlug(false);
          est_lug.textContent =
            "Solo se permiten letras.";
        }
        break;
      case "NombreServicio":
        if (letras.test(e.target.value)) {
          setVnom(true);
          est_nom.textContent = "";
        } else {
          setVnom(false);
          est_nom.textContent = "Solo se permiten letras.";
        }
        break;
      case "DescripcionServicio":
        if (letras.test(e.target.value)) {
          setVdes(true);
          est_des.textContent = "";
        } else {
          setVdes(false);
          est_des.textContent = "Se permiten numeros, y caracteres especiales.";
        }
        break;
        case "foto":
          if (url.test(e.target.value)) {
            setVfot(true);
            est_fot.textContent = "";
          } else {
            setVfot(false);
            est_fot.textContent = "Ingrese la direccion url correctamente.";
          }
          break;
      case "DireccionCliente":
        if (letraNum.test(e.target.value)) {
          setVdir(true);
          est_dir.textContent = "";
        } else {
          setVdir(false);
          est_dir.textContent =
            "Se permiten numeros, letras y caracteres especiales.";
        }
    
    }
  };

  inputs.forEach((input)=>{
      input.addEventListener('keyup', validarFormulario);
      input.addEventListener('blur', validarFormulario);
  });
  // Editar
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [imgCliente, setImgCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const navigate = useNavigate()
  const { id } = useParams();

  const actualizarCitas = async (e) => {
    e.preventDefault()
    const cita = {
        fecha,
        lugar,
        nombreServicio,
        descripcionServicio,
        imgCliente,
        direccionCliente,
    }
    if ( !letras.test(nombresys.value, lugarsys.value , descripcionsys.value) ||
    !letraNum.test(direccionsys.value , fechasys.value) ||
    !url.test(fotosys.value)
      ){
        e.preventDefault();
      }else {
        await axios.put(`${urlCitas}/${id}`, cita)
        navigate("/citas-sys")
      }
    }
    
    useEffect(() => {
      listarCita()
    }, [])
  
    const listarCita = async () =>{
      const res = await axios.get(`${urlCitas}/${id}`)
      setFecha(res.data.fecha)
      setLugar(res.data.lugar)
      setNombreServicio(res.data.nombreServicio)
      setDescripcionServicio(res.data.descripcionServicio)
      setImgCliente(res.data.imgCliente)
      setDireccionCliente(res.data.direccionCliente)
      
    }
    return (
        <section className="container-formClientJ">
          <HeaderSyS />
          <h1>Editar Citas SyS</h1>
          <section className="form-add-client">
            <form action="" id="form-clientJ">
              <div className="div-form">
                <input
                  className="inputJ"
                  id="fecha"
                  name="fecha"
                  type="text"
                  placeholder="fecha"
                  onChange={(e) => setFecha(e.target.value)}
                  value={fecha}
                />
                <i
                  className={
                    vFec ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                  }
                ></i>
              </div>
              <p className="estado" id="est-doc"></p>
              <div className="div-form">
                <input
                  className="inputJ"
                  id="lugar"
                  name="lugar"
                  type="text"
                  placeholder="lugar"
                  onChange={(e) => setLugar(e.target.value)}
                  value={lugar}
                />
                <i
                  className={
                    vLug ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                  }
                ></i>
              </div>
              <p className="estado" id="est-nom"></p>
              <div className="div-form">
                <input
                  className="inputJ"
                  id="Nombreser"
                  name="NombreServicio"
                  type="text"
                  placeholder="Nombre del Servicio"
                  onChange={(e) => setNombreServicio(e.target.value)}
                  value={nombreServicio}
                />
                <i
                  className={
                    vNom ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                  }
                ></i>
              </div>
              <p className="estado" id="est-ape"></p>
              <div className="div-form">
                <input
                  className="inputJ"
                  id="Descripcionser"
                  name="DescripcionServicio"
                  type="text"
                  placeholder="Descripcion del Servicio"
                  onChange={(e) => setDescripcionServicio(e.target.value)}
                  value={descripcionServicio}
                />
                <i
                  className={
                    vDes ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                  }
                  ></i>
                  </div>
                  <p className="estado" id="est-dir"></p>
                  <div className="div-form">
                    <input
                      className="inputJ"
                      id="foto"
                      name="foto"
                      type="text"
                      placeholder="URL Foto"
                      onChange={(e) => setImgCliente(e.target.value)}
                      value={imgCliente}
                    />
                    <i
                      className={
                        vFot ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                      }
                ></i>
              </div>
              <p className="estado" id="est-bar"></p>
              <div className="div-form">
                <input
                  className="inputJ"
                  id="Direccioncli"
                  name="DireccionCliente"
                  type="text"
                  placeholder="Direccion del Cliente"
                  onChange={(e) => setDireccionCliente(e.target.value)}
                  value={direccionCliente}
                />
                <i
                  className={
                    vDir ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"
                  } 
                ></i>
              </div>
              <p className="estado" id="est-fot"></p>
              <Link className="cancelarJ" to={"/citas-sys"}>
                Cancelar
              </Link>
              <input
                id="registrar"
                className="registrarJ"
                type="submit"
                value="Registrar"
                onClick={actualizarCitas}
              />
            </form>
          </section>
        </section>
      );
}

export default EditarCitas