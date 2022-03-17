/**
 * Esto sera nuestro archivo donde vamos a almacenar las peticiones
 */

// Una buena practica es tener la URL del API en una variable
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20"; 

// Podemos crear una funcion generica la cual se encargue de hacer una peticion
// Como parametro vamos a recibir la URL que puede ser ña que lista 
// o la que nos da el detalle
// * url sera el parametr oqu reciba la url hacia donde se hara la peticion
// * url = BASE_URL Significa que si url esta vacio, es decir, cuando llamemos
// * a la funcion y no le pasemos nada, BASE_URL sera el valor por defecto
export const getDataFromPokemon = async (url = BASE_URL) => {
    try{
        // ahora debemos ejecutar el fetch par apoder trar la informacion
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){
        console.log(error.message);
    };
};

