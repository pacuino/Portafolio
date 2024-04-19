const form = document.getElementById('form');
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