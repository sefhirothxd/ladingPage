import ubicacion from './api.js';
import initProyect from './proyectos.js';

const $form = document.querySelector('.formulario');
const $nombres = document.querySelector('#nombres');
const $telefono = document.querySelector('#telefono');
const $correo = document.querySelector('#correo');
const $mensaje = document.querySelector('#mensaje');
const notificacion = document.querySelector('.notificacion');
const bannerPromo = document.querySelector('.container-promo');

// window.addEventListener('scroll', () => {
// 	const currentScroll = window.pageYOffset;
// 	if (currentScroll > 70) {
// 		bannerPromo.classList.add('fixed');
// 	} else {
// 		bannerPromo.classList.remove('fixed');
// 	}
// });

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
    notificacion.classList.add('slide-right');
    setTimeout(() => {
      notificacion.classList.add('none');
      notificacion.classList.remove('flex');
      notificacion.classList.remove('slide-right');
    }, 3000);
    $nombres.value = '';
    $telefono.value = '';
    $correo.value = '';
    $mensaje.value = '';
  }
});

initProyect();

// for (let i = 0; i < children.length; i++) {
//   if (i % 2 === 0) {
//     container.classList.toggle('even');
//   }
// }

const slides = document.querySelectorAll('.container-banner');
const punto = document.querySelectorAll('.punto');

const nextSlide = {
  0: 0,
  1: 33,
  2: 66,
};

setInterval(() => {
  let number = Math.floor(Math.random() * 3);

  slides[0].style.transform = `translateX(-${nextSlide[Math.floor(number)]}%)`;
  punto[0].classList.remove('active-punto');
  punto[1].classList.remove('active-punto');
  punto[2].classList.remove('active-punto');
  punto[number].classList.add('active-punto');

  console.log(nextSlide[number]);
}, 3000);
