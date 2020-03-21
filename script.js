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
$("#today").text(nowFormatted);

//this is the array where I'm storing my saved cities
var cities = [];

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
})

$(".city").on("click",function (event) {
    event.preventDefault();
    var cityName = $(this).attr("name");
    console.log(cityName);
    getWeatherInfo(cityName);
    console.log(fetchedInfo);
    displayCityInfo(cityName);

})

function displayCityInfo(city) {
    $("#cityInfo").empty();
    var firstLine = city + " " + nowFormatted;
    var headline = $("<h3>");
    headline.text(firstLine);
    $("#cityInfo").append(headline);

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
        weatherIcon = (response.weather[0].icon);
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
                condition = "favorable";
            } else if (uvInd < 5) {
                condition = "moderate";
            } else {
                condition = "severe";            }

    })
//http://api.openweathermap.org/data/2.5/uvi?appid=703e3e1e706645b8108c2ea06fb28f0e&lat=-83&lon=42
      });

}
//////////////////////
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//       "q=Bujumbura,Burundi&appid=c74c1b5d674b62a4c8a1b4ee5fc625ad";

//     // Here we run our AJAX call to the OpenWeatherMap API
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // We store all of the retrieved data inside of an object called "response"
//       .then(function(response) {

//         // Log the queryURL
//         console.log(queryURL);
/////////////////////////////
})