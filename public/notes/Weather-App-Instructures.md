Exercise

In ~/vagrant-lamp/codeup.dev/public create a new html file called weather_map.html.
Using HTML, CSS, jQuery, ajax, and the OpenWeatherMap API, start by showing the current conditions for San Antonio on your page.
Update your layout and ajax request(s) to display a three day forecast for San Antonio that looks like the screenshot below.

3 Day Forecast

Hint: The URLs for OpenWeatherMap's icons are formatted http://openweathermap.org/img/w/[icon].png where [icon] comes from the API request.

Create input boxes for "Latitude" and "Longitude" and a <button> that will take the values from those inputs and feed them into your API request. Use Google Maps to find the coordinates for different places around the world and test this out.
Go back to your Google Maps API exercise. Recreate the map below your 3 day forecast. Read through the documentation for the Google Maps API and figure out how to allow the user to drop a pin on any place on the map. Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API. Update the three day forecast with the information from those coordinates (you should also get rid of your input boxes at this point).

3 Day Forecast Map

