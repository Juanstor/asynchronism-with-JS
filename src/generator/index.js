function* elGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const unaConstante = elGenerator();
console.log(unaConstante.next().value); // 1
console.log(unaConstante.next().value); //2 
console.log(unaConstante.next()); // { value: 3, done: false }



// OTRO EJEMPLO
function* iterando(miArray) {
    for (let valores of miArray) {
        yield valores
    }
};

const otraConstante = iterando(['Jorge', 'Gonza', 'Maria', 'brothers', 'Primates']);
console.log(otraConstante.next()); // { value: 'Jorge', done: false }
console.log(otraConstante.next().value); //Gonza
console.log(otraConstante.next().value); // Maria
console.log(otraConstante.next()); // { value: 'brothers', done: false }
console.log(otraConstante.next().value); // Primates
console.log(otraConstante.next().value); // undefined