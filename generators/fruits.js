const fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

function* fruitShop(){
    for(const fruit of fruits) {
        yield fruit;
    }
}

const allFruits = fruitShop();

function makeSalad() {
    let fruitBasket = allFruits.next();
    if(!fruitBasket.done){
        console.log(fruitBasket.value);
        makeSalad();
    } else {
        console.log('--- We are out of fruits ---');
    }
}

makeSalad();