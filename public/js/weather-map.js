"use strict";


// function(){

const myAPIKey = 'b8662ed7c8c0a26934a429c0cf1c2698';


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: myAPIKey,
    q: "San Antonio, TX",
    units: "imperial"

}).done(function (data){
	console.log(data);
}).fail(function(xhr, err, msg) {
	alert('something went wrong!');
});




// })(;)

