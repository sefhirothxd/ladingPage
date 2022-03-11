const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');
const $containerSlider = document.querySelector('.containeer-slider');
const nextSlider = document.querySelector('.splide__arrow--prev');
const prevSlider = document.querySelector('.splide__arrow--next');

// botones expert
const $btn1 = document.querySelector('.btn-expert-1');
const $btn2 = document.querySelector('.btn-expert-2');
const $btn3 = document.querySelector('.btn-expert-3');
const $btn4 = document.querySelector('.btn-expert-4');
const $containerContacto = document.querySelector('.section-contactanos');

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

$btn1.addEventListener('click', () => {
	$btn1.classList.add('card-exp');
	$btn2.classList.add('card-exp-descative');
	$btn3.classList.add('card-exp-descative');
	$btn4.classList.add('card-exp-descative');

	$btn1.classList.remove('card-exp-descative');
	$btn2.classList.remove('card-exp');
	$btn3.classList.remove('card-exp');
	$btn4.classList.remove('card-exp');
});
$btn2.addEventListener('click', () => {
	$btn1.classList.add('card-exp-descative');
	$btn2.classList.add('card-exp');
	$btn3.classList.add('card-exp-descative');
	$btn4.classList.add('card-exp-descative');

	$btn1.classList.remove('card-exp');
	$btn2.classList.remove('card-exp-descative');
	$btn3.classList.remove('card-exp');
	$btn4.classList.remove('card-exp');
});
$btn3.addEventListener('click', () => {
	$btn1.classList.add('card-exp-descative');
	$btn2.classList.add('card-exp-descative');
	$btn3.classList.add('card-exp');
	$btn4.classList.add('card-exp-descative');

	$btn1.classList.remove('card-exp');
	$btn2.classList.remove('card-exp');
	$btn3.classList.remove('card-exp-descative');
	$btn4.classList.remove('card-exp');
});
$btn4.addEventListener('click', () => {
	$btn1.classList.add('card-exp-descative');
	$btn2.classList.add('card-exp-descative');
	$btn3.classList.add('card-exp-descative');
	$btn4.classList.add('card-exp');

	$btn1.classList.remove('card-exp');
	$btn2.classList.remove('card-exp');
	$btn3.classList.remove('card-exp');
	$btn4.classList.remove('card-exp-descative');
});
