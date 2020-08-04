const axios = require('axios');

async function getDays() {
  const urlResponse = await axios.get('https://api.weather.gov/points/42.1958,-84.3809').catch(error => console.log("GET url Error: " + error));
  const daysResponse = await axios.get(urlResponse.data.properties.forecast).catch(error => console.log("GET days Error: " + error));
  return daysResponse.data.properties.periods;
};

async function main() {
  // get weather data from API
  const days = await getDays();
  // add weather data to the DOM
  console.log(days); // placeholder
};

main();