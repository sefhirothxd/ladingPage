let end = new Date('06/02/2022 00:00 AM');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
	let now = new Date();
	let distance = end - now;
	if (distance < 0) {
		clearInterval(timer);
		document.getElementById(
			'basicUsage'
		).innerHTML = `<h2 class="titulo-visualizar">Ahora podrás visualizar<br> la trasmisión</h2>`;
		return;
	}
	let days = Math.floor(distance / _day);
	let hours = Math.floor((distance % _day) / _hour);
	let minutes = Math.floor((distance % _hour) / _minute);
	let seconds = Math.floor((distance % _minute) / _second);

	let dias;
	let horas;
	let minutos;
	let segundos;

	if (days <= 9) {
		dias = '0' + days;
	} else {
		dias = days;
	}
	if (hours <= 9) {
		horas = '0' + hours;
	} else {
		horas = hours;
	}
	if (minutes <= 9) {
		minutos = '0' + minutes;
	} else {
		minutos = minutes;
	}
	if (seconds <= 9) {
		segundos = '0' + seconds;
	} else {
		segundos = seconds;
	}

	document.getElementById('basicUsage').innerHTML =
		`<div class="contador">
    <p class="contador-numero dias-principal" id="c-dias">` +
		dias +
		':';
	document.getElementById('basicUsage').innerHTML +=
		`<div class="contador">
    <p class="contador-numero" id="c-dias">` +
		horas +
		':';
	document.getElementById('basicUsage').innerHTML +=
		`<div class="contador">
    <p class="contador-numero" id="c-dias">` +
		minutos +
		':';
	document.getElementById('basicUsage').innerHTML +=
		`<div class="contador-segundo">
    <p class="contador-numero" id="c-dias">` + segundos;
}

timer = setInterval(showRemaining, 1000);
