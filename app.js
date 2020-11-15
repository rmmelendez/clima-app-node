const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);
*/

/*    
clima.getClima(40.71, -74.01)
    .then(console.log)
    .catch(console.log);
    */


const getInfo = async(address) => {

    try {
        const datos = await lugar.getLugarLatLng(address);
        const temperatura = await clima.getClima(datos.lat, datos.lng);
        return `El clima de ${ address } es de ${ temperatura }`
    } catch (error) {
        return `No se pudo determinar el clima de ${ address }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);