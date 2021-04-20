var currentTime = dayjs()
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));

var apiKey = "fb42ce6edb33c20fdaf2e6d889945d19";
var searchHistory = []
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}";
//Need an Icon
var iconImage = response.weather[0].icon;
var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;



fetch(requestUrl).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log("Data from weatherAPI", data);
});

//Psuedo Code
//GIVEN a weather dashboard with form inputs
// Done with this via the bootstrap on HTML file

//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
var currentCity = $(`
            <h2 id="currentCity">
                ${response.name} ${today} <img src="${iconURL}" alt="${response.weather[0].description}" />
            </h2>
            <p>Temperature: ${response.main.temp} °F</p>
            <p>Humidity: ${response.main.humidity}\%</p>
            <p>Wind Speed: ${response.wind.speed} MPH</p>
            <p>Wind Gust:${response.wind.gust}
        `);
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
("#searchBtn").on("click", function(event) {
    event.preventDefault();{
        //Add Logic of saving to local storage and searching for city
    }
//THEN I am again presented with current and future conditions for that city
