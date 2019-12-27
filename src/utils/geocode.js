const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic25laGFscmFtdGVrZSIsImEiOiJjazQ1dWp4M3owYW5zM2xsOXk3ZmZ5ZTB5In0.jCBgKSucVt94TrxvBMsd2A`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geocoding service", undefined);
    } else if (body.features.length === 0) {
      callback("Could not find location", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
