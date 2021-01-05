const Bank = require('./Bank');

class Itau extends Bank {
    constructor(){
        super();
    }
    processCredit(name, amount){
        const account = this.getAccount(name);
        if(!account){
            console.log('Account not found');
            return;
        }
        account.funds += amount; 
    }
    processDebit(name, amount){
        const account = this.getAccount(name);
        if(!account){
            console.log('Account not found');
            return;
        }
        account.funds -= amount; 
    }
}

module.exports = Itau;