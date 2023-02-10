//Menu
const buttonMenu = document.querySelector("body > div > div > div > div");
buttonMenu.classList.remove('btn-group-vertical');
buttonMenu.classList.add(['d-flex', 'mx-auto']);


//Header

const jumbotron = document.querySelector(".jumbotron");
jumbotron.classList.remove('jumbotron');
jumbotron.classList.add('text-right');
jumbotron.classList.add('bg-secondary');
jumbotron.classList.add('text-light');
jumbotron.classList.add('p-4');
jumbotron.classList.add('rounded');


//Button Jumbotron
const buttonJumbotron = jumbotron.querySelector("a");
buttonJumbotron.classList.remove('btn-primary');
buttonJumbotron.classList.add('btn-success');

//CardsButton

[...document.querySelectorAll('h5')]
  .forEach(e => {
    if(e.innerText === 'Animais') {
      const parent = e.closest('.card-body')
      parent.querySelector('a').classList.replace('btn-primary', 'btn-success');
    }
  });

//CardsOrder

const cardsContainer = document.querySelector('body > div > :nth-child(6)');
const cardsArray = [...document.querySelectorAll('.col-lg-3')];

//animais, tech, pessoas, nature - cardsArray
//natureza, animais, pessoas, tech - newArray
let newArray = [];
newArray[0] = cardsArray[3];
newArray[1] = cardsArray[0];
newArray[2] = cardsArray[2];
newArray[3] = cardsArray[1];

cardsArray.forEach(element => {
  element.remove();
})

newArray.forEach(element => {
  cardsContainer.appendChild(element)
})


//List

const parentContainer = document.querySelector('ul');
const childrenItems = [...parentContainer.querySelectorAll('li')];

childrenItems.forEach(e => {
  if(e.classList.contains('active')) {
    e.classList.remove('active');
  }
})


for (let i=0; i<2; i++) {
  const newElement = document.createElement('li');
  newElement.classList.add('list-group-item');

  if(i===0) {
    newElement.innerText = 'Quarto item';
    newElement.classList.add('active');
  } else {
    newElement.innerText = 'Quinto item';
  }

  parentContainer.appendChild(newElement);
}


