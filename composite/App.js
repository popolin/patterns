const Laptop = require('./Laptop');
const MobilePhone = require('./MobilePhone');
const Catalog = require('./Catalog');

// Phones
const iPhoneXs = new MobilePhone('Apple iPhone XS', "white", 6000);
const galaxyS20 = new MobilePhone('Samsung Galaxy S20', "black", 4000);
const nokia6120 = new MobilePhone('Nokia 6120', "blue", 400);
// Catalog of Phones
const phones = new Catalog("** Mobile Phones **");
phones.add(iPhoneXs).add(galaxyS20).add(nokia6120);

// Laptops
const macBookPro = new Laptop('Apple Macbook', 'Pro 13"', 20000);
const dellInspiron = new Laptop('Dell Inspiron', 'Inspiron 5370"', 3000);
// Catalog of Laptops
const laptops = new Catalog("** Laptops **");
laptops.add(macBookPro).add(dellInspiron);

// Store Catalog
const store = new Catalog("** Store Catalog **")
store.add(phones).add(laptops);

store.getDetails();