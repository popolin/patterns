const { lock, unlock } = require('./Vault');
const password = "123123123";

const obj = {
	name: 'Jhon Doe',
	age: 32,
	city: 'Brasilia',
	country: 'BR'
}

const person = lock(obj, password);
person.zipcode = '123.12322';

console.log(person);

const unlocked = unlock(person, password);
unlocked.food = 'Pizza';
console.log(unlocked);