import ubicacion from './api.js';

//cambio de precios
const precio = document.querySelector('.container-cards');
const bandera = document.querySelector('.container-bandera');
const precioPromo = document.querySelector('.precio-promo');

const country = {
	PE: {
		name: 'Perú',
		money: 'S/',
		bandera: 'https://flagcdn.com/pe.svg',
		precioPromo: '499',
		basico: {
			price: '499',
			priceAlter: '750',
			renovacion: '250',
		},
		corporativo: {
			price: '1099',
			priceAlter: '1500',
			renovacion: '390',
		},
		emprendedor: {
			price: '799',
			priceAlter: '1200',
			renovacion: '350',
		},
	},
	US: {
		name: 'United States',
		money: '$',
		bandera: 'https://flagcdn.com/us.svg',
		precioPromo: '135',
		basico: {
			price: '135',
			priceAlter: '199',
			renovacion: '65',
		},
		corporativo: {
			price: '300',
			priceAlter: '399',
			renovacion: '110',
		},
		emprendedor: {
			price: '215',
			priceAlter: '320',
			renovacion: '90',
		},
	},
	CL: {
		name: 'Chile',
		money: '$',
		bandera: 'https://flagcdn.com/cl.svg',
		precioPromo: '135',
		basico: {
			price: '135',
			priceAlter: '199',
			renovacion: '65',
		},
		corporativo: {
			price: '300',
			priceAlter: '399',
			renovacion: '110',
		},
		emprendedor: {
			price: '215',
			priceAlter: '320',
			renovacion: '90',
		},
	},
	EC: {
		name: 'Ecuador',
		money: '$',
		bandera: 'https://flagcdn.com/ec.svg',
		precioPromo: '135',
		basico: {
			price: '135',
			priceAlter: '199',
			renovacion: '65',
		},
		corporativo: {
			price: '300',
			priceAlter: '399',
			renovacion: '110',
		},
		emprendedor: {
			price: '215',
			priceAlter: '320',
			renovacion: '90',
		},
	},
	CO: {
		name: 'Colombia',
		money: '$',
		bandera: 'https://flagcdn.com/co.svg',
		precioPromo: '135',
		basico: {
			price: '135',
			priceAlter: '199',
			renovacion: '65',
		},
		corporativo: {
			price: '300',
			priceAlter: '399',
			renovacion: '110',
		},
		emprendedor: {
			price: '215',
			priceAlter: '320',
			renovacion: '90',
		},
	},
};
const countryDefaults = {
	money: '$',
	name: 'United Nations',
	bandera: 'https://flagcdn.com/un.svg',
	precioPromo: '135',
	basico: {
		price: '135',
		priceAlter: '199',
		renovacion: '65',
	},
	corporativo: {
		price: '300',
		priceAlter: '399',
		renovacion: '110',
	},
	emprendedor: {
		price: '215',
		priceAlter: '320',
		renovacion: '90',
	},
};

const cambiandoInfo = async () => {
	const data = await ubicacion();
	console.log('aqui toy', data);
	const precios = country[data.country] || countryDefaults;
	precioPromo.innerHTML = `<span class="precio-promo">${precios.money}${precios.precioPromo}</span>`;
	bandera.innerHTML = `<img
	src=${precios.bandera}
	width="32px"
	alt="bandera"
/><p>${precios.name}</p>`;
	console.log(precios);
	precio.innerHTML = `<div class="card-precio">
	<div class="card-precio__container">
		<h3 class="card-precio__container-title">Plan Básico</h3>
		<div class="card-precio__container-money">
			<p>
				${precios.basico.price} <span>${precios.money}</span>
				<span class="card-precio__container-igv">+ IGV</span>
			</p>
		</div>
		<p class="card-precio__container-money-price-after">
			Precio normal <del>${precios.money} ${precios.basico.priceAlter}</del>
		</p>
	</div>
	<div class="card-precio__container-list">
		<div class="card-precio__container-list__item card-first-margin">
								<img src="./img/check.svg" alt="" />
								<p>Hosting y Dominio (Gratis)</p>
							</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Certificado ssl</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>1 Páginas</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>1 Slider</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>3 Categorías</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>10 Imagenes (edición)</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>2 Correo corporativo</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Web responsive</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Mapa ubicación</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Integracion con RRSS</p>
		</div>
		<div class="card-precio__container-list__item">
			<i class="fa-solid fa-xmark fa-lg close-x"></i>
			<p class="x-p">Web administrable</p>
		</div>
		<div class="card-precio__container-list__item">
			<i class="fa-solid fa-xmark fa-lg close-x"></i>
			<p class="x-p">Manual de usuario</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Formulario de contacto</p>
		</div>
		<div class="card-precio__container-list__item">
			<i class="fa-solid fa-xmark fa-lg close-x"></i>
			<p class="x-p">Chat online</p>
		</div>
		<span class="card-precio__container-list__item"
			><i>* Renovación anual ${precios.money} ${precios.basico.renovacion}</i></span
		>
		<a
			href="https://api.whatsapp.com/send?phone=51977832615&text=Hola,%20vengo%20de%20skillien.%20Me%20gustar%C3%ADa%20tener%20mas%20informaci%C3%B3n%20del%20Plan%20Basico."
			target="_blank"
			class="btn-comprar-card"
			>Comprar</a
		>
	</div>
</div>
<div class="card-precio card-precio-medio">
	<div class="card-precio__container">
		<h3 class="card-precio__container-title">Plan Corporativo</h3>
		<div class="card-precio__container-money">
			<p>
			${precios.corporativo.price}<span>${precios.money}</span>
				<span class="card-precio__container-igv-corp">+ IGV</span>
			</p>
		</div>
		<p class="card-precio__container-money-price-after">
			Precio normal <del>${precios.money} ${precios.corporativo.priceAlter}</del>
		</p>
	</div>
	<div class="card-precio__container-list">
		<div class="card-precio__container-list__item card-first-margin">
								<img src="./img/check.svg" alt="" />
								<p>Hosting y Dominio (Gratis)</p>
							</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Certificado ssl</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>5 Páginas</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>3 Slider</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>5 Categorias</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>30 Imagenes (edición)</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>10 Correo corporativo</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Web responsive</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Mapa ubicación</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Integracion con RRSS</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Web administrable</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Manual de usuario</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Formulario de contacto</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="" />
			<p>Chat online</p>
		</div>
		<span class="card-precio__container-list__item"
			><i>* Renovación anual ${precios.money} ${precios.corporativo.renovacion}</i></span
		>
		<a
			href="https://api.whatsapp.com/send?phone=51977832615&text=Hola,%20vengo%20de%20skillien.%20Me%20gustar%C3%ADa%20tener%20mas%20informaci%C3%B3n%20del%20Plan%20Corporativo."
			target="_blank"
			class="btn-comprar-card"
			>Comprar</a
		>
	</div>
</div>
<div class="card-precio">
	<div class="card-precio__container">
		<h3 class="card-precio__container-title">Plan Emprendedor</h3>
		<div class="card-precio__container-money">
			<p>
			${precios.emprendedor.price} <span>${precios.money}</span>
				<span class="card-precio__container-igv">+ IGV</span>
			</p>
		</div>
		<p class="card-precio__container-money-price-after">
			Precio normal <del>${precios.money} ${precios.emprendedor.priceAlter}</del>
		</p>
	</div>
	<div class="card-precio__container-list">
	<div class="card-precio__container-list__item card-first-margin">
	<img src="./img/check.svg" alt="" />
	<p>Hosting y Dominio (Gratis)</p>
</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Certificado ssl</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>3 Páginas</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>2 Slider</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>3 Categorias</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>15 Imagenes (edición)</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>5 Correo corporativo</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Web responsive</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Mapa ubicación</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Integracion con RRSS</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Web administrable</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Manual de usuario</p>
		</div>
		<div class="card-precio__container-list__item">
			<img src="./img/check.svg" alt="icon de check" />
			<p>Formulario de contacto</p>
		</div>
		<div class="card-precio__container-list__item">
			<i class="fa-solid fa-xmark fa-lg close-x"></i>
			<p class="x-p">Chat online</p>
		</div>
		<span class="card-precio__container-list__item"
			><i>* Renovación anual ${precios.money} ${precios.emprendedor.renovacion}</i></span
		>
		<a
			href="https://api.whatsapp.com/send?phone=51977832615&text=Hola,%20vengo%20de%20skillien.%20Me%20gustar%C3%ADa%20tener%20mas%20informaci%C3%B3n%20del%20Plan%20Emprendedor."
			target="_blank"
			class="btn-comprar-card"
			>Comprar</a
		>
	</div>
</div>`;
};
cambiandoInfo();
