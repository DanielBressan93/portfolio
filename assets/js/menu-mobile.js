// Menu Mobile
const nav = document.querySelector('.navbar');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.link');
const eventos = ['click', 'touchstart'];

export default function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle('ativo');
  handleClickOutside(menu, () => {
    nav.classList.remove('ativo');
  });
  const ativo = nav.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativo);
  if (ativo) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute('data-target');
      html.removeEventListener('click', handleHTMLClick);
      html.removeEventListener('touchstart', handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute('data-target')) {
    html.addEventListener('click', handleHTMLClick);
    html.addEventListener('touchstart', handleHTMLClick);
    targetElement.setAttribute('data-target', '');
  }
}

eventos.forEach((evento) => {
  btnMenu.addEventListener(evento, toggleMenu);
});

links.forEach((link) => {
  link.addEventListener('touchstart', () => {
    nav.classList.remove('ativo');
  });
});
