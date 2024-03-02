const proyectos = [
  {
    id: 1,
    name: 'card-1',
    title: 'Kito Perú',
    description: 'Empresa japonesa especializada en ventas de Tecle electricos.',
    img: '../img/KITOPERU.jpg',
    url: 'https://kitoperu.com/',
    type: 'ecommerce',
    size: 'small',
  },
  {
    id: 2,
    name: 'card-2',
    title: 'Rothenberger Perú',
    description: 'Empresa especializada en venta de Tumberias industriales.',
    img: '../img/ROTHENBERGERPERU.jpg',
    url: 'https://rothenbergerperu.com/',
    type: 'landing',
    size: 'large',
  },
  {
    id: 3,
    name: 'card-3',
    title: 'X-Spark',
    description:
      'Empresa especializada en distribuir herramientas de seguridad para zona de alto riesgo.',
    img: '../img/X-SPARK.jpg',
    url: 'https://antichispaherramientas.com/',
    type: 'app',
    size: 'large',
  },
  {
    id: 4,
    name: 'card-4',
    title: 'Comercym',
    description: 'Empresa especializada en venta de estructura para el almacenamiento.',
    img: '../img/COMERCYM.jpg',
    url: 'https://comercym.com/',
    type: 'aula',
    size: 'small',
  },
  // {
  //   id: 5,
  //   name: 'card-5',
  //   title: 'Torque Perú',
  //   description: 'Empresa especializada en ventas de todo tipo de torques.',
  //   img: '../img/TORQUEPERU.jpg',
  //   url: 'https://torqueperu.com/',
  //   type: 'ecommerce',
  //   size: 'small',
  // },
  // {
  //   id: 6,
  //   name: 'card-6',
  //   title: 'Block Buster',
  //   description: 'Páginas web que muestra los puntages recibido cada peliculas.',
  //   img: '../img/blockbuster.jpg',
  //   url: 'https://blockbuster-two.vercel.app/',
  //   type: 'ecommerce',
  //   size: 'large',
  // },
];

const containerProyect = document.querySelector('.container-portafolio-img');
const btn_todos = document.querySelector('.todos');
const btn_ecommerce = document.querySelector('.ecommerce');
const btn_landing = document.querySelector('.landing');
const btn_aula = document.querySelector('.aula');
const btn_aplicativo = document.querySelector('.aplicativo');

const initProyect = () => {
  btn_todos.classList.add('active');
  btn_ecommerce.classList.remove('active');
  btn_aula.classList.remove('active');
  btn_landing.classList.remove('active');
  btn_aplicativo.classList.remove('active');

  containerProyect.innerHTML = '';
  proyectos.forEach((p) => {
    containerProyect.innerHTML += `<a href=${p.url} target="_blank" class="portafolio-img ${p.name} ${p.size}">
    <div class="portfolio-gradient"></div>
    <img class="img-portafolio" loading="lazy" src=${p.img} alt="" />
    <article class="article-portafolio">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </article>
  </a>`;
  });
};
const landing = () => {
  btn_todos.classList.remove('active');
  btn_ecommerce.classList.remove('active');
  btn_aula.classList.remove('active');
  btn_landing.classList.add('active');
  btn_aplicativo.classList.remove('active');

  const filter = proyectos.filter((f) => f.type == 'landing');
  console.log(filter);
  containerProyect.innerHTML = '';
  filter.forEach((p) => {
    containerProyect.innerHTML += `<a href=${p.url} target="_blank" class="portafolio-img ${p.name} ${p.size}">
    <div class="portfolio-gradient"></div>
    <img class="img-portafolio" loading="lazy" src=${p.img} alt="" />
    <article class="article-portafolio">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </article>
  </a>`;
  });
};
const ecommerce = () => {
  btn_todos.classList.remove('active');
  btn_ecommerce.classList.add('active');
  btn_aula.classList.remove('active');
  btn_landing.classList.remove('active');
  btn_aplicativo.classList.remove('active');

  const filter = proyectos.filter((f) => f.type == 'ecommerce');
  console.log(filter);
  containerProyect.innerHTML = '';
  filter.forEach((p) => {
    containerProyect.innerHTML += `<a href=${p.url} target="_blank" class="portafolio-img ${p.name} ${p.size}">
    <div class="portfolio-gradient"></div>
    <img class="img-portafolio" loading="lazy" src=${p.img} alt="" />
    <article class="article-portafolio">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </article>
  </a>`;
  });
};
const app = () => {
  btn_todos.classList.remove('active');
  btn_ecommerce.classList.remove('active');
  btn_aula.classList.remove('active');
  btn_landing.classList.remove('active');
  btn_aplicativo.classList.add('active');

  const filter = proyectos.filter((f) => f.type == 'app');
  console.log(filter);
  containerProyect.innerHTML = '';
  filter.forEach((p) => {
    containerProyect.innerHTML += `<a href=${p.url} target="_blank" class="portafolio-img ${p.name} ${p.size}">
    <div class="portfolio-gradient"></div>
    <img class="img-portafolio" loading="lazy" src=${p.img} alt="" />
    <article class="article-portafolio">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </article>
  </a>`;
  });
};
const aula = () => {
  btn_todos.classList.remove('active');
  btn_ecommerce.classList.remove('active');
  btn_aula.classList.add('active');
  btn_landing.classList.remove('active');
  btn_aplicativo.classList.remove('active');

  const filter = proyectos.filter((f) => f.type == 'aula');
  console.log(filter);
  containerProyect.innerHTML = '';
  filter.forEach((p) => {
    containerProyect.innerHTML += `<a href=${p.url} target="_blank" class="portafolio-img ${p.name} ${p.size}">
    <div class="portfolio-gradient"></div>
    <img class="img-portafolio" loading="lazy" src=${p.img} alt="" />
    <article class="article-portafolio">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </article>
  </a>`;
  });
};

btn_todos.addEventListener('click', initProyect);
btn_ecommerce.addEventListener('click', ecommerce);
btn_aplicativo.addEventListener('click', app);
btn_landing.addEventListener('click', landing);
btn_aula.addEventListener('click', aula);

export default initProyect;
