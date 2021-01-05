const axios = require('axios');
const API_KEY = '8a9b48c6e4885622e874';

const CurrencyConverter = fn => {
    return async function(qty, price, base, to){
        const result = await fn(qty, price); // Original Function
        const url = `https://free.currconv.com/api/v7/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=${API_KEY}`;
        const resultRate = await axios(url);
        const currencyRate = resultRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]['val'];

        return (currencyRate * result);
    }
}

module.exports = CurrencyConverter;