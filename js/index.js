const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');
const $containerSlider = document.querySelector('.containeer-slider');
const verFormulario = document.querySelector('.container-formulario');
const btnMostrarForm = document.querySelector('.comentario');
const xFormulario = document.querySelector('.x-icon');
// botones expert
const $btn1 = document.querySelector('.btn-expert-1');
const $btn2 = document.querySelector('.btn-expert-2');
const $btn3 = document.querySelector('.btn-expert-3');
const $btn4 = document.querySelector('.btn-expert-4');
const $containerContacto = document.querySelector('.section-contactanos');

btnMostrarForm.addEventListener('click', () => {
	verFormulario.style.display = 'block';
});
xFormulario.addEventListener('click', () => {
	verFormulario.style.display = 'none';
});

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
