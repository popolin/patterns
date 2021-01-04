function* getColors(){
    yield 'Red';
    yield 'Green';
    yield 'Blue';
}

const colors = getColors();

console.log(colors.next());
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());