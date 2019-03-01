function * generatorFunction() {
    console.log('This will be executed');
    yield 'Hello';
    console.log('I will be executed second');
    yield 'World';
}

const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);


//power series using generators

function * powerSeries(number,power) {
    let base = number;
    while(true) {
        yield Math.pow(base,power);
        base++;
    }
}
const pow = powerSeries(2,2);
console.log(pow.next().value);