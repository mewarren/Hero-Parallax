import html from './content.html';
import './content.css';
import Template from '../Template';

const template = new Template(html);

export default class Content {

  // document.window.addEventListener('scroll', function(e) {
  //   let scrolled = window.pageYOffset;
  //   const background = document.querySelector('.color-transition');
  //   background.getElementsByClassName.top = -(scrolled * 0.2) + 'px';
  // }); 
  
  render(){
    return template.clone();
  }
  
}