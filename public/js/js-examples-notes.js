






google.maps.event.addListener(marker, "dragend", function (Event) {
	var markerPosition =[]


})



function getForecast(){
	conole.log('test');



}



$(#submit).click(function(event){
	
})

function addForecast(forecastData){
	var cityName = foreCastData.city,name;
	var content = "";

forecastData.list.forEach(function(day){console.log(day);

var icon = day.weather[0].icon;
var iconUrl = "http://openweathermap.org/img/w/" + icon + '.png';
var date = new Date(day.dt * 1000).toDateString();

content += "<div class='col-sm-4'>";
content += "<h3>" + date + "</h3>";
content += "<div class='col-sm-4'>";
content += "<h3>" + date + "</h3>";
content += 
content += "<div class='col-sm-4'>";
content += "<h3>" + date + "</h3>";
content
})

}