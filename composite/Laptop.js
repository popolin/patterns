const Item = require('./Item');

class Laptop extends Item {
    constructor(name, model, cost){
        super(name, 'Laptop');
        this.model = model;
        this.cost = cost;
    }
    getDetails(){
        console.log(`${this.getName()} :: model ${this.model}, priced at ${this.cost}`);
    }
}

module.exports = Laptop;