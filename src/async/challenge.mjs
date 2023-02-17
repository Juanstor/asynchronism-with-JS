import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Usaremos una función sin el arrow function
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

// Ahora usaremos una función con arrow function
const fnsegunda = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[8].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log('estos son todos los productos:', products);
        console.log('Titulo del producto:', product.title);
        console.log('Y está en esta categoría:', category.name);
        console.log('Y está en esta categoría:', category.image);
    }
    catch (error) {
        console.error(error);
    }
}

fnsegunda(API);