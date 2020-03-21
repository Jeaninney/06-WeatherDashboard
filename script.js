//moment("2019-06-04 15:35").isSame("2019-04-06", "hour"); - would return false, not the same
//isBefore, isAfter, isSameOrBefore

//past is .bg-dark
//present is .bg-warning
//future is .bg-success

//this loads all of the HTML before running any JS
$(function () {

// these 2 lines set the date at the top of the page
var now = moment();
var nowFormatted = now.format("dddd, MMMM Do YYYY");
var nowDate = now.format('l');
$("#today").text(nowFormatted);

//this is the array where I'm storing my saved cities
var cities = [];
var cityName;
var fetchedInfo;
var weatherIcon;
var temp;
var humidity;
var windSpd;
var uvInd;
var lat;
var lon;
var key = "69d1653fc61ce085ac6426f019836bb0";
var condition;


// console.log(citiesString);
// // setting the parsed string of cities to my city array
// var cities = JSON.parse(citiesString);
// console.log(cities);

function displayButtons() {
    $("#cityButtons").empty(); //clears the buttons area
    //getting the String of saved cities from local storage
    var citiesString = localStorage.getItem("cities");
    console.log(citiesString);
    if (citiesString != null) { 
        cities = JSON.parse(citiesString);
        console.log(cities);
        cities.forEach(buildButtons) //adds a button for each item in the cities arry
    }
} 
displayButtons();    
var lastCity =localStorage.getItem("lastCity");
if (lastCity != null) {
    getWeatherInfo(localStorage.getItem("lastCity"));
    getForecast(localStorage.getItem("lastCity"));
}
    
function buildButtons (city, index) {
    
    var newBtn = $("<button>");
    newBtn.addClass("city mx-auto w-100 text-left");
    newBtn.attr("name", city);
    newBtn.text(city);
    $("#cityButtons").append(newBtn);
    $("#cityButtons").append($("<br>"));

}
    

$("#addCityButton").on("click", function (event){
    event.preventDefault();
    var city = $("#cityInput").val().trim();
    cities.push(city);
    var cityString = JSON.stringify(cities);
    localStorage.setItem("cities",cityString);
    console.log(cityString);
    displayButtons();
    getWeatherInfo(city);
    getForecast(city);
    var lastCity = city;
    localStorage.setItem("lastCity", lastCity);
})

$(".city").on("click",function (event) {
    event.preventDefault();
    var cityName = $(this).attr("name");
    console.log(cityName);
    getWeatherInfo(cityName);
    getForecast(cityName);
    var lastCity = cityName;
    localStorage.setItem("lastCity", lastCity);
})

function displayCityInfo(city) {
    $("#cityInfo").empty(); //clears the are with the City Info
    var firstLine = city.cityName + " " + city.date; //puts together the city name and date so it's easier to work with
    var headline = $("<h3>"); // creates a new h3 tag
    headline.text(firstLine); // adds the city name and date as the text to the h3 tag
    var weatherIconImage = $("<img>"); // creates a new image tag
    weatherIconImage.attr('src', city.weatherIcon) // sets the source url for the image tag tot he url stored in the city object
    weatherIconImage.attr('alt', "Icon of the current weather"); 
    weatherIconImage.attr('height', "35");
    var tempDiv = $("<div>");
    tempDiv.text("Temperature: " + city.temperature + "°F");
    var humDiv = $("<div>");
    humDiv.text("Humidity: " + city.humidity + "%");
    var windDiv = $("<div>");
    windDiv.text("Wind Speed: " + city.windSpeed + " MPH");
    var uvDiv = $("<div>");
    uvDiv.text("UV Index: ");
    var uvSpan = $("<span>");
    uvSpan.addClass(city.condition);
    uvSpan.text(city.uvIndex);
    $("#cityInfo").append(headline);
    $("#cityInfo").append(weatherIconImage);
    $("#cityInfo").append("<p> </p>");

    $("#cityInfo").append(tempDiv);

    $("#cityInfo").append($("p"));
    $("#cityInfo").append(humDiv);
    $("#cityInfo").append($("p"));
    $("#cityInfo").append(windDiv);
    $("#cityInfo").append($("p"));
    $("#cityInfo").append(uvDiv);
    
    $("#cityInfo").append(uvSpan);

}
function getWeatherInfo(city){
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+key;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
        console.log(response);
        cityName = (response.name);
        weatherIcon = (response.weather[0].icon);
        weatherIcon = "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
        temp = (response.main.temp);
        humidity = (response.main.humidity);
        windSpd = (response.wind.speed);
        lat = (response.coord.lat);
        lon = (response.coord.lon);
        console.log("end here");
        queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid="+key+"&lat="+lat+"&lon="+lon;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then (function(response) {
            console.log(response);
            uvInd = (response.value);
            if (uvInd < 2) {
                condition = "bg-success";
            } else if (uvInd < 5) {
                condition = "bg-warning";
            } else {
                condition = "bg-danger";            
            }
            //all info is ready to go!
            var cityInfo = {
                "cityName": cityName,
                "date": nowDate,
                "weatherIcon": weatherIcon,
                "temperature": temp,
                "humidity": humidity,
                "windSpeed": windSpd,
                "uvIndex": uvInd,
                "condition": condition
            }
            console.log(cityInfo);
            displayCityInfo(cityInfo);

    })
      });

}
///////api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
function getForecast(city){
    console.log(city);
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+key;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            console.log("Forecast");
            console.log(response);
    
        })
    }
/////////
})