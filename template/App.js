const Itau = require('./Itau');

const bank = new Itau();
bank.createAccount('Jhon Doe', 2000);
bank.credit('Jhon Doe', 500);
bank.view('Jhon Doe');