import ubicacion from './api.js';

const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');

$form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const datos = await ubicacion();
	const data = {
		nombres: $nombres.value,
		telefono: $telefono.value,
		correo: $correo.value,
		mensaje: $mensaje.value,
		ubicacion: datos.country,
	};
	const nuevo = JSON.stringify(data);
	console.log(nuevo);
	const res = await fetch('https://back-correo.herokuapp.com/mail', {
		method: 'POST',
		body: nuevo,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	if (res.ok) {
		$nombres.value = '';
		$telefono.value = '';
		$correo.value = '';
		$mensaje.value = '';
		alert('El formulario se ha enviado correctamente');
	}
});
