const Bank = require('./Bank');
// const logger = require('./console-logger');
const logger = require('./file-logger');

Bank.config({
    logger
});

const user1 = 'Jhon Doe';

Bank.createAccount(user1);
Bank.credit(user1, 100);
Bank.debit(user1, 25);

console.log(Bank.getFunds(user1));
