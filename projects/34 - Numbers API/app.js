// http://numbersapi.com/
//
//

const factPara = document.querySelector('.fact');
const factInput = document.querySelector('input');

const factBtn = document.querySelector('button');

factBtn.addEventListener('click', () => {
  const number = factInput.value;
  const numberFact = parseInt(number);

  fetchFact(numberFact);
});

async function fetchFact(number) {
  const factURL = 'http://numbersapi.com/';
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';

  const response = await fetch(`${proxyURL}${factURL}${number}`, {
    method: 'GET',
    headers: {
      'x-requested-with': 'text/plain',
    },
  });
  const responseData = await response.text();
  factPara.innerText = responseData;
}

// async function getFact() {

//   const response = await fetch(url);
//   const data1 = await response.text(data);
//   console.log(data1);
// }
