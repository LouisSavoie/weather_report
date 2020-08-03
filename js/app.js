const axios = require('axios');

//seperate concerns and deal with promises

// get forecast url
function getForecastURL() {
    axios.get('https://api.weather.gov/points/42.1958,-84.3809')
  .then(function (response) {
    // handle success
    getForecast(response.data.properties.forecast);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
};

// get forecast
function getForecast(url) {
    axios.get(url)
    .then(function (response) {
        // handle success
      console.log(response.data.properties.periods);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

getForecastURL();