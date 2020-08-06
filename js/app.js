async function getDays() {
  const urlResponse = await $.ajax('https://api.weather.gov/points/42.1958,-84.3809');
  const daysResponse = await $.ajax(urlResponse.properties.forecast);
  return daysResponse.properties.periods;
};

async function main() {
  // get weather data from API
  const days = await getDays();
  // add weather data to the DOM
  console.log(days); // placeholder
};

main();