const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encodeURL }`,
        headers: { 'x-rapidapi-key': 'ea2d733886msh5a7ca7c6f33f2a4p1530f3jsn72f98974f7c6' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
    /*
        instance.get()
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                console.log('ERROR!!!!', err);
            });
    */
}
module.exports = {
    getLugarLatLng
}