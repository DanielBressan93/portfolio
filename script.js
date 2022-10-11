import toggleMenu from './assets/js/menu-mobile.js';
import typeWriter from './assets/js/writer.js';
import Slide from './assets/js/slide.js';

const slide = new Slide('.slide', '.slide-wrapper');

slide.init();
slide.changeSlide(2);
slide.activePrevSlide();
