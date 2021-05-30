//
//

// The Superhero Entry Class
class SuperheroEntry {
  constructor(superheroName, superheroUniverse, superheroPower) {
    this.superheroName = superheroName;
    this.superheroUniverse = superheroUniverse;
    this.superheroPower = superheroPower;
  }
}

// Superhero List Class
class SuperheroList {
  // Add Superhero Function
  addSuperHero(entry) {
    const listData = document.querySelector('.superhero-list-data');
    const listContainer = document.createElement('ul');
    listContainer.setAttribute('id', 'list');

    listContainer.innerHTML += `
      <li>${entry.superheroName}</li>
      <li>${entry.superheroUniverse}</li>
      <li>${entry.superheroPower}</li>
      <i class="fas fa-trash"></i>
    `;

    listData.appendChild(listContainer);
  }

  // Clear Super hero Input fields Function
  clearSuperheroInputs() {
    [
      document.querySelector('#name').value,
      document.querySelector('#universe').value,
      document.querySelector('#power').value,
    ] = ['', '', ''];
  }

  // Validation Error Function
  validationError() {
    document.querySelector('.validate-error').classList.add('show-validation');
    setTimeout(() => {
      document
        .querySelector('.validate-error')
        .classList.remove('show-validation');
    }, 2500);
  }

  // Validation Success Function
  validationSuccess() {
    document
      .querySelector('.validate-success')
      .classList.add('show-validation');
    setTimeout(() => {
      document
        .querySelector('.validate-success')
        .classList.remove('show-validation');
    }, 2500);
  }
}

// Store Superhero Class
class StoreSuperhero {
  static getSuperhero() {
    let superheroes;
    if (localStorage.getItem('superheroes') === null) {
      superheroes = [];
    } else {
      superheroes = JSON.parse(localStorage.getItem('superheroes'));
    }

    return superheroes;
  }

  static addSuperHero(entry) {
    const superheroesList = StoreSuperhero.getSuperhero();

    superheroesList.push(entry);
    localStorage.setItem('superheroes', JSON.stringify(superheroesList));
  }

  // Display superheroes from ls
  static displaySuperhero() {
    const superheroesList = StoreSuperhero.getSuperhero();

    superheroesList.forEach(function (superhero) {
      // Instantniating SuperheroList class
      const list = new SuperheroList();
      list.addSuperHero(superhero);
    });
  }

  // Removing superheroes from the ls
  static removeSuperhero(clickedSuperhero) {
    const superheroesList = StoreSuperhero.getSuperhero();

    superheroesList.forEach((superhero, index) => {
      if (superhero.superheroName === clickedSuperhero) {
        superheroesList.splice(index, 1);
      }
    });

    localStorage.setItem('superheroes', JSON.stringify(superheroesList));
  }
}

// ****************** EVENTS ******************
document.addEventListener('DOMContentLoaded', StoreSuperhero.displaySuperhero);

// Form submission event listener
const form = document.querySelector('.superhero-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector('#name').value,
    document.querySelector('#universe').value,
    document.querySelector('#power').value,
  ];

  // Instantiating the superhero class
  const entry = new SuperheroEntry(
    superheroName,
    superheroUniverse,
    superheroPower
  );

  // Instantiating the superhero list
  const list = new SuperheroList();

  // Validate the form if one or more of input fields are empty

  if (
    superheroName === '' ||
    superheroUniverse === '' ||
    superheroPower === ''
  ) {
    list.validationError();
  } else {
    list.addSuperHero(entry);
    list.clearSuperheroInputs();
    list.validationSuccess();

    // Adding superhero to local storage
    StoreSuperhero.addSuperHero(entry);
  }
});

// Deleting Listed Superheroes
const listData = document.querySelector('.superhero-list-data');
listData.addEventListener('click', function (e) {
  if (e.target.className === 'fas fa-trash') {
    const trash = e.target.parentNode;

    const clickedSuperhero =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent;
    // console.log(clickedSuperhero);

    StoreSuperhero.removeSuperhero(clickedSuperhero);

    trash.remove();
  }
});
