
const currentConverter = require('./CurrencyConverter');

const cost = (qty, price) => Promise.resolve(qty * price);
// cost(2, 5).then(result => console.log(result));

// Com Converter:
const costPlus = currentConverter(cost);
costPlus(20, 5, 'BRL', 'USD').then(result => console.log(result));