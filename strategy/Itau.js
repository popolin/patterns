const Bank = require('./Bank');

class Itau extends Bank {
    processPayment(){
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by Itaú`);
    }
    processRefund(){
        console.log(`A refund of ${this.amount} for ${this.account} has been processed by Itaú`);
    }
}

module.exports = Itau;