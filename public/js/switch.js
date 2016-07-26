"use strict";
// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];
switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
    case 'red':
        console.log("The color is red. Red is the color of most apples.");
        break;
    case 'orange':
        console.log("The color is orange. Orange is the color of The University of Texas.");
        break;
    case 'yellow':
        console.log("The color is yellow. Yellow is the color of bananas.");
        break;
    case 'green':
        console.log("The color is green. Green is the color of grass.");
        break;
    case 'blue':
        console.log("The color is blue. Blue is the color of the sky.");
        break;
    default:
        console.log("The color is indigo or violet.  I do not know anything by that color.");
}
