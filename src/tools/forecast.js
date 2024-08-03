const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=6623ca2ddc644c30874175343241207&q=${latitude},${longitude}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else if (!response.body.location || !response.body.current) {
            callback("Weather data not available for the provided location", undefined);
        } else {
            const weatherInfo = `${response.body.location.name} - It is ${response.body.current.condition.text}` + "and the temp is " + `${response.body.current.temp_c}`;
            callback(undefined, weatherInfo);
        }
    });
};

module.exports = forecast;
