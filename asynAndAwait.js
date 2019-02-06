const axios = require('axios');

module.exports = {
  convert: async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
  },

  parallel: async () => {
    let [task3, task4] = await Promise.all([wait(2000, 'parallelTask1'), wait(500, 'parallelTask2')])

    // step 3 - all results are 100% ready
    console.log(task3, task4)
  }

}

function wait(ms, data) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('First '+ data);
    },ms)
  })
}

async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    return exchangeRate;
  } catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);
  }
}

async function getCountries(currencyCode) {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }

}

