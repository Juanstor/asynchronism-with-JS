const XMLHttppRequest = require('xmlhttprequest').XMLHttpRequest; //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) { //funcion principal que obtendrá la informacion del producto como un objeto
	let xhttp = new XMLHttppRequest(); //referencia a new XMLHttpRequest

	xhttp.open('GET', urlApi, true); //petición "obtener" con true para habilitarlo. El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
	xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
	if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
		if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		} else {
			const error = new Error('Error' + urlApi);
			return callback(error,null); //es null porque no se está regresando ningún dato
		}
	} 
	}
	xhttp.send();
}


// Ahora hacemos el llamado de la función, pasarle el callbacke ir mostrando la información

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).

fetchData(`${API}/products`, function(error1, data1){
	if (error1) return console.error(error1);
	fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
		if(error2) return console.error(error2);
		fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
			if (error3) return console.error(error3);
			console.log(data1[0]);
			console.log(data2.title);
			console.log(data3.name);
		});
	});
});