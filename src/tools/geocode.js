
const request = require("request");

const geocode = (address, callback) => {
    const geocoderUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2FlZG8iLCJhIjoiY2x5azVtOGcxMDNpNDJsczJ0MXowanBocCJ9.rNMStTd57QHKncX8hTp7tw";

    request({ url: geocoderUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to geocode service", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else if (!response.body.features || response.body.features.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            });
        }
    });
};

module.exports = geocode;
