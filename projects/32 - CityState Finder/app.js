//
//

const searchInput = document.querySelector('.search');
const suggestionsContainer = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

const citiesStates = [];

fetch(
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
).then((response) => {
  return response.json().then((data) => {
    citiesStates.push(...data);
  });
});

function findMatches(wordToMatch, citiesStates) {
  return citiesStates.filter((cityState) => {
    const regX = new RegExp(wordToMatch, 'gi');

    return cityState.city.match(regX) || cityState.state.match(regX);
  });
}

function displayMatches(e) {
  const findArray = findMatches(this.value, citiesStates);

  const matchElement = findArray
    .map((place) => {
      const regX = new RegExp(this.value, 'gi');

      const cityName = place.city.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );

      const statename = place.state.replace(
        regX,
        `<span class="highlight">${this.value}</span>`
      );

      return `
      <li class="name">${cityName},${statename}</li>
    `;
    })
    .join('');

  suggestionsContainer.innerHTML = matchElement;
}
