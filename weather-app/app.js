const request = require('request');

request(
  {
    url:
      'http://maps.googleapis.com/maps/api/geocode/json?address=10407%20Berlin%20Danziger%20132',
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, null, 2));
  }
);
