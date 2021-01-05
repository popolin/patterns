class Bank {
    constructor(){
        this.vault = [];
    }
    createAccount(name, initialDeposit){
        this.vault.push({
            name, 
            funds: initialDeposit
        });
    }
    getAccount(name){
        return this.vault.find(account => account.name === name);
    }
    view(name){
        const account = this.getAccount(name);
        if(!account){
            console.log(`Account not found`);
            return;
        }
        console.log(`Account [${account.name}] has U$ ${account.funds}`);
    }
    credit(name, amount){
        console.log(`Crediting [${amount}] to account ${name}`);
        return this.processCredit(name, amount);
    }
    debit(name, amount){
        console.log(`Debiting [${amount}] from account ${name}`);
        return this.processDebit(name, amount);
    }
}

module.exports = Bank;