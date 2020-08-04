const axios = require('axios');

//seperate concerns and deal with promises

// async function getURL() {
//   const response = await axios.get('https://api.weather.gov/points/42.1958,-84.3809');
//   return response;
// };

// async function getForecast(url) {
//   const response = axios.get(url);
//   return response;
// };

// async function main() {
//   const url = await getURL();
//   const days = await getForecast(url);
//   console.log(days);
// };

// main();

async function getDays() {
  const urlResponse = await axios.get('https://api.weather.gov/points/42.1958,-84.3809').catch(error => console.log("GET url Error: " + error));
  const url = await urlResponse.data.properties.forecast;
  const daysResponse = await axios.get(url).catch(error => console.log("GET days Error: " + error));
  const days = await daysResponse.data.properties.periods;
  return days;
};

async function main() {
  const days = await getDays();
  console.log(days);
};

main();


// function getDailyForcast() {
//   axios.get('https://api.weather.gov/points/42.1958,-84.3809')
//     .then(function(response) {
//       return response.data.properties.forecast;
//     })
//     .then(function(url) {
//       return axios.get(url);
//     })
//     .then(function (daily) {
//       return daily;
//     });
// };

// function main() {
//   getDailyForcast()
//     .then(function(days){
//       console.log(days);
//     });
// };

// main();

// // get forecast url
// function getForecastURL() {
    
//   .then(function (response) {
//     // handle success
//     getForecast(response.data.properties.forecast);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
// };

// // get forecast
// function getForecast(url) {
//     axios.get(url)
//     .then(function (response) {
//         // handle success
//       console.log(response.data.properties.periods);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// };

// getForecastURL();