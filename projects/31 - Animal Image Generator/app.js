/*
Public API Repo
https://github.com/public-apis/public-apis
*/

let cat = document.querySelector('.cat');
let fox = document.querySelector('.fox');
let dog = document.querySelector('.dog');

const catBtn = document.querySelector('.get-cat');
const foxBtn = document.querySelector('.get-fox');
const dogBtn = document.querySelector('.get-dog');

catBtn.addEventListener('click', getRandomCat);
foxBtn.addEventListener('click', getRandomFox);
dogBtn.addEventListener('click', getRandomDog);

function getRandomCat() {
  fetch('https://aws.random.cat/meow').then((response) => {
    return response.json().then((data) => {
      cat.innerHTML = `
        <img src="${data.file}" alt="cat-image" />
      `;
    });
  });
}

function getRandomFox() {
  fetch('https://randomfox.ca/floof/').then((response) => {
    return response.json().then((data) => {
      fox.innerHTML = `
        <img src="${data.image}" alt="fox-image" />
      `;
    });
  });
}

function getRandomDog() {
  fetch('https://random.dog/woof.json').then((response) => {
    return response.json().then((data) => {
      dog.innerHTML = `
        <img src="${data.url}" alt="dog-image" />
      `;
    });
  });
}
