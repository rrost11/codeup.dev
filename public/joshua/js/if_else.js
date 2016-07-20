// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array

"use strict"
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'red'; 


if (color === "red") {
    console.log("The Color is Red. Red is the most popular color of Solo Cups.")
} else if (color === "orange") {
    console.log("The Color is Orange. Burnt Orange is the school color for The University of Texas.")
} else if (color === "yellow") {
   console.log("The Color is Yellow. The majority of emojis are yellow.")
} else if (color === "green") {
	console.log("The Color is Green. Codeup uses shades of green in their logo.")
} else if (color === "blue") {
	console.log("The Color is Blue. The Blue Man Group is full of bald guys with blue faces.")
} else {
	console.log("I do not know anything by that color.")
};

var favecolor = (color === favorite) ? "This is Rachel's favorite color." : "Not Rachel's favorite color.";

console.log(favecolor);



// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
