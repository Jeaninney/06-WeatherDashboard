# 06 Server-Side APIs: Weather Dashboard

This is my attempt at Homework 6. I tried to tick most of the boxes but 
just ran out of time.

I spent HOURS trying to get the lines in the city info section to populate on 
new lines. I tried using new divs for each item. I tried adding <p>s and even 
<br>s. I even tried throwing in a \n, but nothing worked for me. I need help with this. 

The site accepts a city name in the Search box, and when the search button is clicked, the city name gets a new button appended to the bottom of the list.

The list of buttons is saved in the local storage and populates when the page is loaded.

When a button is clicked, the site sends a request to the openweathermap.org API using the name of the city on the button clicked as the search parameter. The API returns the requested information, which I stored into an object and passed to the function displayCityInfo. I wanted to separate this function out because I get confused when too many functions are nested. There are a lot of variables for the same reason, it helps me keep track of what is getting stored and what is not.

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
DONE (except future)
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
DONE
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
DONE
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
DONE (except future)
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
DONE


Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
