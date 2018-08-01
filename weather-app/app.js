const yargs = require('yargs');

const geocodeAddress = require('./geocode/geocodeAddress.js');
const getForecast = require('./forecast/getForecast');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help().argv;

geocodeAddress(argv.address)
  .then((response) => {
    getForecast(response.location);
  })
  .catch((error) => {
    console.log(error);
  });
