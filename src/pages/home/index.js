import '../../style.css';
import './style.scss';
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
console.log(location.pathname);
console.log(location.pathname.split('/').filter(Boolean));

const profile = location.pathname.split('/').filter(Boolean);

if (profile.length > 0) {
  console.log(profile[0]);
  if (profile[0] === 'tedshd') {
    // document.body.style.backgroundColor = 'lightblue';
    const root = document.querySelector(':root');
    root.style.setProperty('--dark-color', '#0088ff');
  }
}

console.log('env:', process.env.NODE_ENV);
console.log('env:', process.env.API_HOST);