const fetch = require('node-fetch');
const log = require('../utils/log');

const apiKey = 'cadf23998dabc69c8a03404881ef8cb9';

module.exports = (location) => {
  return fetch(
    `https://api.darksky.net/forecast/${apiKey}/${location.lat},${location.lng}?units=si`,
  )
    .then((response) => response.json())
    .then((response) => {
      log(response.currently.apparentTemperature);
    });
};
