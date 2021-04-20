var currentTime = dayjs()
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));

var apiKey = "fb42ce6edb33c20fdaf2e6d889945d19";

var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}";
fetch(requestUrl).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log("Data from weatherAPI", data);
});

