const fetch = require('node-fetch');
const URLSearchParams = require('url-search-params');

module.exports = (input) => {
  const urlParams = new URLSearchParams({
    address: input,
  });

  return fetch(`http://maps.googleapis.com/maps/api/geocode/json?${urlParams.toString()}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.status !== 'OK') {
        throw new Error('invalid response');
      }
      return {
        address: response.results[0].formatted_address,
        location: response.results[0].geometry.location,
      };
    });
};
