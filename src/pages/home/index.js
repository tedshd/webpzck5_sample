import '../../style.css';
import Icon from '../../assets/images/icon.png';
import '../../utils/util.js';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello' + 'webpack';

  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

console.log('Hello, webpack!');
console.log('home');
console.log(location.pathname);
console.log(location.pathname.split('/').filter(Boolean));