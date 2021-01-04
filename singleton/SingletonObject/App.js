const Register = require('./CashRegister');
const Register2 = require('./CashRegister');

Register.credit(25);
Register.credit(35);

Register2.credit(20);

console.log(`Total of Register 2: ${Register2.total()}`)

Register.debit(5);

console.log(`Total of Register: ${Register.total()}`)