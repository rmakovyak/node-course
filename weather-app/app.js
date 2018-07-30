const yargs = require('yargs');

const geocodeAddress = require('./geocode/geocodeAddress.js');

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
    console.log(JSON.stringify(response, undefined, 2));
  })
  .catch((error) => {
    console.log(error);
  });
