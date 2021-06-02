//
//

const fromCurrencyInput = document.querySelector('.from-currency');
const toCurrencyInput = document.querySelector('.to-currency');

const exchangeAmountInput = document.querySelector('.amount');
const getRateButton = document.querySelector('.get-rate');

//
//

getRateButton.addEventListener('click', function (e) {
  e.preventDefault();
  const fromCurrencyValue = fromCurrencyInput.value.toUpperCase();
  const toCurrencyValue = toCurrencyInput.value.toUpperCase();

  const exchangeAmount = exchangeAmountInput.value;

  if (
    fromCurrencyValue === '' ||
    toCurrencyValue === '' ||
    exchangeAmount === ''
  ) {
    inputError();
    console.log('ERROR');
  } else {
    convertCurrency(fromCurrencyValue, toCurrencyValue, exchangeAmount)
      .then((exchangeResult) => {
        document.querySelector('.currency-item').innerText = exchangeResult;
        setTimeout(() => {
          location.reload();
        }, 10000);
      })
      .catch(() => invalidCode());
  }
});

//
//

async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(
    'http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1'
  );

  const responseData = await response.json();
  const currencyRates = responseData.rates;
  const baseCurrency = 1 / currencyRates[fromCurrency];
  const exchangeRate = baseCurrency * currencyRates[toCurrency];

  if (isNaN(exchangeRate)) {
    throw new Error(invalidCode());
  }

  return exchangeRate;
}

//
//

async function convertCurrency(fromCurrency, toCurrency, exchangeAmount) {
  const amountExchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (exchangeAmount * amountExchangeRate).toFixed(2);

  return `${exchangeAmount} ${fromCurrency} ===> ${convertedAmount} ${toCurrency}`;
}

//
//

function inputError() {
  document.querySelector('.input-error').classList.add('show');
  setTimeout(() => {
    document.querySelector('.input-error').classList.remove('show');
  }, 3000);
}

function invalidCode() {
  document.querySelector('.invalid-code').classList.add('show');
  setTimeout(() => {
    document.querySelector('.invalid-code').classList.remove('show');
  }, 2000);
}
