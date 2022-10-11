// Efeito Máquina de Escrever

const titleWritable = document.querySelector('[data-text="title"]');

export default function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 75 * i);
  });
}

typeWriter(titleWritable);
