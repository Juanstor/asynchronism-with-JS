//Datos
const cows = 15;

// Función promesa
const contCows = new Promise(function (resuelto, rechazado) {
    if (cows > 10) {
        resuelto(`you have ${cows} in the farm, it's enought for production.`);
    } else {
        rechazado(`you only have ${cows}, its not enought!`);
    }
})

// Cuando se cumple promesa
contCows.then((promesaCumplida) => {
    console.log(promesaCumplida);
})
// Si no se cumple promersa
.catch((promesaNoCumplida) => {
    console.log(promesaNoCumplida);
})

// Ejecutar una vez se cumpla o no la promesa
.finally(() => console.log('The process is done.'));