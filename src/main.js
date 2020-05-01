import './reset.css';
import './main.css';
import App from './components/app/App';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.render());

///paralax scroll
window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;
  const transition = document.querySelector('.color-transition');
  transition.style.top = -(scrolled * 1.5) + 'px';
});

///paralax scroll
window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;
  const wave = document.querySelector('.wave2');
  wave.style.top = -(scrolled * 1.25) + 'px';
  fadeBackground();
  collapseBackground();
  showHeader();
  scaleOverlay();
});

//fades out background
const fadeBackground = function() {
  let background = document.getElementById('background');
  
  if(window.scrollY > 30) {
    background.setAttribute('class', 'background fade');
  } else { background.setAttribute('class', 'background'); }
};

//scales down height of background image
const collapseBackground = function() {
  let background = document.getElementById('background');
  
  if(window.scrollY > 175) {
    background.setAttribute('class', 'background fade collapse');
  } else if(window.scrollY > 30) { 
    background.setAttribute('class', 'background fade'); }
};

const showHeader = function() {
  let header = document.getElementById('main-head');
  console.log(header);
  if(window.scrollY > 175) { 
    header.setAttribute('class', 'drop');
  } else { header.setAttribute('class', 'lift'); }  
};

const scaleOverlay = function() {
  let overlay = document.getElementById('text-overlay');
  if(window.scrollY > 200) {
    overlay.setAttribute('class', 'text-overlay scale');
  } else { overlay.setAttribute('class', 'text-overlay unscale'); }
};
