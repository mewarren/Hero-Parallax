import './reset.css';
import './main.css';
import App from './components/app/App';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.render());


/// starts the transitions and animates page
window.addEventListener('scroll', function() {
  
  transitionScroll();
  fadeBackground();
  collapseBackground();
  // showHeader();
  // scaleOverlay();

});

/// waves parallax scrolling
const transitionScroll = function() {
  let scrolled = window.pageYOffset;
  
  let transition = document .querySelector('.color-transition');
  transition.style.top = -(scrolled * 2) + 'px';

  let wave = document .querySelector('.wave2');
  wave.style.top = -(scrolled * 1.25) + 'px';

  let overlay = document.querySelector('.text-overlay');
  overlay.style.top = -(scrolled * 1.15) + 'px';

  let hero = document.querySelector('hero');
  if(scrolled < -175) {
    hero.style.top = -(scrolled * 2) + 'px';
  } else { return };
}

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
  let wave = document.getElementById('wave2');
  
  if(window.scrollY > 175) {
    background.setAttribute('class', 'background fade collapse');
  } else if(window.scrollY > 30) { 
    background.setAttribute('class', 'background fade'); 
  }
};

//drop down transition for header
const showHeader = function() {
  let header = document.getElementById('main-head');
  if(window.scrollY > 175) { 
    header.setAttribute('class', 'drop');
  } else { header.setAttribute('class', 'lift'); }  
};

// const showHeader = function() {
//   let header = document.getElementById('main-head');
//   console.log(header);
//   if(window.scrollY > 175) { 
//     header.setAttribute('class', 'drop');
//   } else { header.setAttribute('class', 'lift'); }  
// };

// const scaleOverlay = function() {
//   let overlay = document.getElementById('text-overlay');
//   if(window.scrollY > 200) {
//     overlay.setAttribute('class', 'text-overlay scale');
//   } else { overlay.setAttribute('class', 'text-overlay unscale'); }
// };
