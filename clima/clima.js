const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bd37183784d6bead69d3a49fc2b9fd4e&units=metric`);

    return resp.data.main.temp;

}
module.exports = {
    getClima
}