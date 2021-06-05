/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "52c7443633a16cb467f20b8cb92c85d5";
//let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    //console.log(FULL_URL)
    //HINT: Use template literals to create a url with input and an API key
    const weatherPromise = fetch(FULL_URL)
    return weatherPromise.then((response) =>
    {
       return response.json();
    });
}
//console.log(getWeatherData("pune"));
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response) =>
  {
      showWeatherData(response);
      console.log(response)
  }).catch((error) =>{
    document.getElementById("city-name").innerText = "--";
    document.getElementById("country-name").innerText = "--";
    document.getElementById("weather-type").innerText = "--";
    document.getElementById("temp").innerText = "--";
    document.getElementById("min-temp").innerText = "--";
    document.getElementById("max-temp").innerText = "--";
    document.getElementById("sun-rise").innerText = "--";
    document.getElementById("sun-set").innerText = "--";
    
      console.log(error)})
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText =`City name is ${weatherData.name}`;
  document.getElementById("country-name").innerText = `country is ${weatherData.sys.country}`;
  document.getElementById("weather-type").innerText = `Weather type is ${weatherData.weather[0].main}`;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("sun-rise").innerText = weatherData.sys.sunrise;
  document.getElementById("sun-set").innerText = weatherData.sys.sunset;
  
  
  
  
  
}

