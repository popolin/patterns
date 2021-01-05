const Bank = require('./Bank');

class Santander extends Bank {
    processPayment(){
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by Santander`);
    }
    processRefund(){
        console.log(`A refund of ${this.amount} for ${this.account} has been processed by Santander`);
    }
}

module.exports = Santander;