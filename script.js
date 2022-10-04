// Menu Mobile
const btnMenu = document.querySelector('.btn-menu');
const eventos = ['click', 'touchstart'];

const toggleMenu = (event) => {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('ativo');
  const ativo = nav.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativo);
  if (ativo) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
};

eventos.forEach((evento) => {
  btnMenu.addEventListener(evento, toggleMenu);
});

// Efeito Máquina de Escrever
const titleWritable = document.querySelector('[data-text="title"]');

const typeWriter = (element) => {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 75 * i);
  });
};

typeWriter(titleWritable);
