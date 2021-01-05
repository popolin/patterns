const Payment = require('./Payment');
const Santander = require('./Santander');
const Itau = require('./Itau');

const payment = new Payment();

payment.pay(new Santander(200, '081232'));

payment.pay(new Itau(40, '1100'));
payment.pay(new Santander(120, '081232'));