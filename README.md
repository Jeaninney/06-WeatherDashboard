# 06 Server-Side APIs: Weather Dashboard

The site is a weather dashboard. You can add new cities to your buttons for easy access to the weather for the cities you're interested in. When you type in a city name and search for it, the weather for that city displays along with a 5 day forecast. It also saves that city as a button for easy access in the future. 

The list of buttons is saved in the local storage and populates when the page is loaded.

When a button is clicked, the site sends a request to the openweathermap.org API using the name of the city on the button clicked as the search parameter. The API returns the requested information, which I stored into an object and passed to the function displayCityInfo. I wanted to separate this function out because I get confused when too many functions are nested. There are a lot of variables for the same reason, it helps me keep track of what is getting stored and what is not.

I have completed all of the requirements, even though some of my formatting is off.

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
DONE
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
DONE
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
DONE
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
DONE
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
DONE 
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
DONE



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
I spent HOURS trying to get the lines in the city info section to populate on 
new lines. I tried using new divs for each item. I tried adding <p>s and even 
<br>s. I even tried throwing in a \n, but nothing worked for me. I need help with this.