"use strict";

var name = prompt("Please enter your name: ");

if (name == "") {
    alert("Please enter your name: ");
} else {
    alert("Welcome " + name + "!  Codeup.dev says Hi!");
}

var userLikesPizza = confirm(name + ", do you like pizza?");

if (userLikesPizza) {

    alert('Awesome, I love pizza too! ' + name + ", you have great taste!");

} else {

    alert(name + " ... No way! Pizza is delicious. Maybe you should try it again to see what you're missing out on!");
}





// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.