(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    // TODO: Convert planetsString to an array, save it to planetsArray.

    var planetsArray = planetsString.split('|');

    console.log(planetsArray);


    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    // Why might this be useful?   


    var planetsStringWithBreaks = planetsArray.join("<br>");

    console.log(planetsStringWithBreaks);


    // Bonus: Create a second string that would display your planets in an undordered list.
    // You will need an opening AND closing <ul> tags around the entire string, and <li> tags 
    // around each planet. 
    // console.log() your results.
    var planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    console.log(planetsArray);

    function planetsStringUnorderList(listItems) {

        var planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        
        console.log("<ul>");

        var planetsStringItems = planetsArray.split();

        for /*
            Description:
            The forEach() method executes a provided function once per array element.
        
            Syntax:
            arr.forEach(callback[, thisArg])
        */

        return planetsarray.split;

        console.log(planetsarray.split);

        console.log("</ul>");

    }

    // "<li>" + '' + "</li>"

    console.log(planetsStringUnorderList);












})();
