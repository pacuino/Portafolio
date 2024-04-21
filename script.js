const form = document.getElementById('form');
const inputs = document.querySelector('#form input textarea');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.Value)){

            }else{
                document.getElementById('usuario').classList.add('')
            }
        break;
        case "email":
            if(expresiones.email.test()){

            }
        break;
        case "asunto":
            if(expresiones.asunto.test()){

            }
        break;
        case "mensaje":
            if(expresiones.mensaje.test()){

            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
});




const usuario = document.getElementById('username');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usuarioValue = usuario.nodeValue.trim();
    const emailValue = email.Value.trim();
    const asuntoValue = asuntoValue.trim();

    if(usuarioValue === ''){
        setErrorFor()
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.e
}