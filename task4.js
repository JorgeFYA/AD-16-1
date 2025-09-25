const containerEl = document.getElementById('container');
console.log(containerEl);

const secondClassElements = document.querySelectorAll('.second');
console.log(secondClassElements);

const listOlThirdClassElement = document.querySelector('ol li.third');
console.log(listOlThirdClassElement);

containerEl.insertAdjacentText('afterbegin', 'Hello!');

const footerClassElement = document.querySelector('.footer');
// footerClassElement.classList.add('main');
// footerClassElement.classList.remove('main');

/* setTimeout(() => {
  footerClassElement.classList.add('main');
  setTimeout(() => {
    footerClassElement.classList.remove('main');
  }, 3000);
}, 3000); */

const newLi = document.createElement('li');
const ulEl = document.querySelector('ul');
newLi.innerText = 'four';
ulEl.append(newLi);
