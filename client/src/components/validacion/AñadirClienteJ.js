const formulario = document.getElementById('form-clientJ')
const inputs = document.querySelectorAll('#formulario input')
const documento = document.getElementById('documento')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const telefono = document.getElementById('telefono')
const correo = document.getElementById('correo')
const barrio = document.getElementById('barrio')
const direccion = document.getElementById('direccion')
const foto = document.getElementById('foto')
const est_doc = document.getElementById('est-doc')
const est_nom = document.getElementById('est-nom')
const est_ape = document.getElementById('est-ape')
const est_tel = document.getElementById('est-tel')
const est_cor = document.getElementById('est-cor')
const est_bar = document.getElementById('est-bar')
const est_dir = document.getElementById('est-dir')
const est_fot = document.getElementById('est-fot')

const letras = /[a-zA-Z]+[-_]*[a-zA-Z]+/g
const letraNum = /^[a-zA-Z0-9#-\s]{1,30}$/;
const cel = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g
const documentId = /((\d{7,11})|(\d{1}\.)?(\d{1,3}\.)(\d{3}\.)(\d{3}))(-\d{1})?/g
const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const cra = /^[.\d+]{1,50}$/
const url = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const validarFormulario = (e)=>{
    switch (e.target.name) {
        case "documento":
            if (documentId.test(e.target.value)) {
                est_doc.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_doc.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "nombre":
            if(letras.test(e.target.value)){
                est_nom.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_nom.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "apellido":
            if (letras.test(e.target.value)) {
                est_ape.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_ape.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "telefono":
            if (cel.test(e.target.value)) {
                est_tel.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_tel.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "correo":
            if (email.test(e.target.value)) {
                est_cor.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_cor.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "barrio":
            if (letraNum.test(e.target.value)) {
                est_bar.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_bar.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "direccion":
            if (cra.test(e.target.value)) {
                est_dir.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_dir.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
        case "foto":
            if (url.test(e.target.value)) {
                est_fot.textContent = '<i class="fa-solid fa-check"></i>'
            } else {
                est_fot.textContent = '<i class="fa-solid fa-circle-exclamation"></i>'
            }
            break;
    }
};

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
