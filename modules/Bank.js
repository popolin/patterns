// const accounts = [];

// const findAccount = name => accounts.find(acc => acc.name === name);

// const createAccount = (name, money = 0) => {
//     if(findAccount(name)){
//         return 'Account already exists';
//     }
//     accounts.push({
//         name, money
//     })
//     return `New account created for ${name}`;
// }

// const credit = (name, money) => {
//     const account = findAccount(name);
//     if(account){
//         account.money += money;
//     }
// }

// const debit = (name, money) => {
//     const account = findAccount(name);
//     if(account){
//         account.money -= money;
//     }
// }

// const getFunds = (name) => {
//     const account = findAccount(name);
//     if(!account){
//         return 'Account not found';
//     }
//     return account.money;
// }

// module.exports = {
//     createAccount, credit, debit, getFunds
// };

const accounts = [];
const findAccount = Symbol('findAccount');
// const log = Symbol('log');
// const trimName = name => 
//     `XXXXXXX${name.replace(/\s/g, '')
//     .slice(-4)
//     .toUpperCase()}`

class Bank {

    config({ logger }){
        this.logger = logger;
    }

    [findAccount](name) {
        return accounts.find(acc => acc.name === name);
    }

    log(content) {
        if(this.logger){
            this.logger.write(content)
        }
    }

    createAccount(name, money = 0){
        if(this[findAccount](name)){
            this.log('Account already exists');
        }
        accounts.push({
            name, money
        })
        this.log(`New account created for ${name}`);
    }

    credit(name, money){
        const account = this[findAccount](name);
        if(account){
            account.money += money;
            this.log(`Credit of ${money} to ${name}`)
        }
    }

    debit(name, money) {
        const account = this[findAccount](name);
        if(account){
            account.money -= money;
            this.log(`Debit of ${money} to ${name}`);
        }
    }

    getFunds(name){
        const account = this[findAccount](name);
        if(!account){
            this.log(`ERROR: Account ${name} not found`)
        }
        this.log(`Funds of ${name} required`);
        return account.money;
    }
}

module.exports = new Bank();