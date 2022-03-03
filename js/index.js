console.log('Hola mundo');

const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');

$form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const form = new FormData($form);

	const res = await fetch('https://formspree.io/f/mgedyzka', {
		method: 'POST',
		body: form,
		headers: {
			Accept: 'application/json',
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
