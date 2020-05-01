import './reset.css';
import './main.css';
import App from './components/app/App';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.render());

window.addEventListener('scroll', function(e) {

// console.log('scroll!!');
  let scrolled = window.pageYOffset;
  const transition = document.querySelector('.color-transition');
  //   const wave = document.getElementById('wave2');
    
  //   wave.style.top = -(scrolled * 1.25)  + 'px';
  transition.style.top = -(scrolled * 2.5) + 'px';
});

window.addEventListener('scroll', function(e) {

  // console.log('scroll!!');
  let scrolled = window.pageYOffset;
  const wave = document.querySelector('.wave2');
  //   const wave = document.getElementById('wave2');
        
  //   wave.style.top = -(scrolled * 1.25)  + 'px';
  wave.style.top = -(scrolled * 2) + 'px';

  fadeBackground();
});

const fadeBackground = function() {
    let background = document.getElementById('background');

    if(window.scrollY > 50) {
        background.setAttribute('class', 'background fade');
    } else { background.setAttribute('class', 'background'); }


    console.log('scroll');

};

//Brings Header into view
// window.addEventListener('scroll', function(e) {
//   if(window.scrollY > 350){
//     document.getElementById('text-overlay').setAttribute('style', 'width:15%; position:absolute; top:350px');
    
//   } else { document.getElementById('text-overlay').style.width = 60 + '%';
//   } 
// });



// function showHeader() {
//     if(document.body.scrollTop > 350 || document.documentElement.scroolTop > 350) {
//         console.log('logo change');
//         document.getElementById('text-overlay').style.width = 15 + '%';
//     } else { document.getElementById('text-overlay').style.width = 60 + '%';
// }
// }

// window.onscroll = function() {
//   showHeader();
// };
