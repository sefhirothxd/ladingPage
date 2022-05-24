import ubicacion from './api.js';

const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');
const notificacion = document.querySelector('.notificacion');

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
	const res = await fetch('https://back-correo.herokuapp.com/mail', {
		method: 'POST',
		body: nuevo,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	if (res.ok) {
		notificacion.classList.remove('none');
		notificacion.classList.add('flex');
		setTimeout(() => {
			notificacion.classList.add('none');
			notificacion.classList.remove('flex');
		}, 2000);
		$nombres.value = '';
		$telefono.value = '';
		$correo.value = '';
		$mensaje.value = '';
	}
});
