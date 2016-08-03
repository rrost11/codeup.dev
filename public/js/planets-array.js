// TODO: Create an array holding the names of the eight planets 
// in our solar system in order, starting closest to the sun.

(function() {
    "use strict";

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


//  ---------------This is the function for logging the planets array-----------------------
    
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

// ---------------------------------Add The Sun---------------------------------------------
    
    logPlanets();
    
    console.log('Adding "The Sun" to the beginning of the planets array.');

    planets.unshift("The Sun");

    logPlanets();

// -------------------------------Add Pluto--------------------------------------------------

    console.log('Adding "Pluto" to the end of the planets array.');

    planets.push("Pluto");

    logPlanets();

// -----------------------------Remove The Sun------------------------------------------------

    console.log('Removing "The Sun" from the beginning of the planets array.');

    planets.shift("The Sun");

    logPlanets();

// ------------------------------Remove Pluto--------------------------------------------------

    console.log('Removing "Pluto" from the end of the planets array.');

    planets.pop();

    logPlanets();

// --------------------------------Find & Log Earth--------------------------------------------

    console.log('Finding and logging the index of "Earth" in the planets array.');

    console.log(planets.indexOf("Earth"));
    logPlanets();

// --------------------------------Remove Earth with Splice------------------------------------

    console.log('Using splice to remove the planet after Earth.');

    planets.splice(planets.indexOf("Earth") + 1, 1);

    logPlanets();

// ---------------------------------Use Splice to Add Earth Back-------------------------------

    console.log('Using splice to add back the planet after Earth.');

    planets.splice(planets.indexOf("Earth") + 1, 0, "Mars");

    logPlanets();

// ---------------------------------Reverse the Order of Planets-------------------------------

    console.log('Reversing the order of the planets array.');

    planets.reverse();

    logPlanets();

// -----------------------------------Sorting The Planets--------------------------------------

    console.log('Sorting the planets array.');

    planets.sort();

    logPlanets();

// ------------------------------Join The Planet with Pipes------------------------------------

    // todo: Join the planets array with pipes (|) to create a variable named 'planetsAsString'.

    var planetsAsString = planets.join('|');

    console.log(planetsAsString);

// ------------------------------Split the Variable with Pipes---------------------------------


    // todo: Split the 'planetsAsString' variable by pipes (|) to create a variable named 'planetsAsArray'.

    var planetsAsArray = planetsAsString.split('|');

    console.log(planetsAsArray);


})();
