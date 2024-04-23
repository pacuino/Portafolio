/*
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const campos = {
	
	nombre: false,
	asunto: false,
	correo: false,
	mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');
        break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}-group`).classList.remove('form-group-incorrecto');
        document.getElementById(`${campo}-group`).classList.add('form-group-correcto');
        document.querySelector(`#${campo}-group i`).classList.remove('bx-x-circle');
        document.querySelector(`#${campo}-group i`).classList.add('bx-check-circle');
        document.querySelector(`#${campo}-group .form-input-error-item`).classList.remove('form-input-error-item-activo');
    }else{
        document.getElementById(`${campo}-group`).classList.add('form-group-incorrecto');
        document.getElementById(`${campo}-group`).classList.remove('form-group-correcto');
        document.querySelector(`#${campo}-group`).classList.remove('bx-x-circle');
        document.querySelector(`#${campo}-group`).classList.add('bx-check-circle');
        document.querySelector(`#${campo}-group .form-input-error-item`).classList.add('form-input-error-item-activo');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.correo && campos.asunto && campos.mensaje ){
		formulario.reset();

		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('form-group-correcto').forEach((icono) => {
			icono.classList.remove('form-group-correcto');
		});
	} else {
		document.getElementById('form-mensaje').classList.add('form-mensaje-activo');
	}
});*/

/* Inicio Prueba */

const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input, #form textarea');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const campos = {
	nombre: false,
	correo: false,
	asunto: false,
    mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'email');
		break;
        case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
        case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form-${campo}`).classList.remove('form-group-incorrecto');
		document.getElementById(`form-${campo}`).classList.add('form-group-correcto');
		document.querySelector(`#form-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#form-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#form-${campo} .form-input-error`).classList.remove('form-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`form-${campo}`).classList.add('form-group-incorrecto');
		document.getElementById(`form-${campo}`).classList.remove('form-group-correcto');
		document.querySelector(`#form-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#form-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#form-${campo} .form-input-error`).classList.add('form-input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.email && campos.asunto && campos.mensaje ){
		formulario.reset();

		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form-group-correcto').forEach((icono) => {
			icono.classList.remove('form-group-correcto');
		});
	} else {
		document.getElementById('form-mensaje-alerta').classList.add('form-mensaje-activo');
	}
});

/* Fin Prueba */