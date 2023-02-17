const fnAsync = () => {
    return new Promise((resuelto, rechazao) => {
    (true)
        ? setTimeout(() => resuelto('Esta asincronisao!!'), 2000)
        : rechazao(new Error('Marca como error!'));
    });
}

const fnOtra = async() => {
    const constanteAlgo = await fnAsync();
    console.log(constanteAlgo);
    console.log('Se aplicó el "constateAlgo"');
}

console.log('Antes de aplicar constanteAlgo');
fnOtra();
console.log('ya inició constanteAlgo');