"use strict";
// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];
var favorite = 'blue'; // TODO: change this to your favorite color from the list
// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.
// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
if (color == "red") {
    console.log("The color is red. Red is the color of stop signs.");
} else if (color == "orange") {
    console.log("The color is orange. Orange is the color of the Nike logo.");
} else if (color == "yellow") {
    console.log("The color is yellow. Yellow is the color of lemons.");
} else if (color == "green") {
    console.log("The color is green. Green is the color of Codeup's logo.");
} else if (color == "blue") {
    console.log("The color is blue. Blue is the color of Twitter's logo.");
} else if (color == "indigo" || "violet") {
    console.log("I do not know anything about that color.");
}
favorite === (color) ? console.log("The random color matches my favorite color blue.") : console.log("This is not my favorite color.");
