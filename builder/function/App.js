const Pizza = require('./Pizza');

const peppperoni = new Pizza();
peppperoni.setBase('Wheat');
peppperoni.setSauce('Tomato');
peppperoni.setCheese('Mozzarella');
peppperoni.setToppings(['Pepperoni', 'Basil']);
peppperoni.bake();