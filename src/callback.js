function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callbackName) {
    return callbackName(num1, num2);
}

console.log(calc(3,2, sum)); //5



// Otro tipo de callback pero en tiempo
setTimeout(function () {
    console.log('Ya pasaron 4 segundos');
}, 4000); // en 4 segundos se imprimirá el texto "Ya pasaron 4 segundos"

 // ñapa
function saludito(name) {
    console.log(`que pasa ${name} todo bien?`);
}

setTimeout(saludito, 3000, 'Mario');