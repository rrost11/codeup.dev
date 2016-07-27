'use strict';



var gradeSum = 70 + 80 + 95;

console.log(gradeSum);

var average = gradeSum / 3;

console.log(average);



if (average > 80) {

    console.log("You're Awesome!");

} else {

    console.log("You Need To Practice More");
}






var person = "Ryan";
var salesAmount = 180;
var discount = 0.35;
var finalAmount;


if (salesAmount > 200) {
    finalAmount = salesAmount - (salesAmount * discount);
    console.log(person + " purhcased $" + salesAmount + " and a 35% discount was applied. Final payment is: $"
        + finalAmount);
} else {
    finalAmount = salesAmount;
    console.log(person + " purchased $" + salesAmount + " and no discount was applied.  Final payment is: $"
       + finalAmount);
}

var person = "Cameron";
var salesAmount = 250;

if (salesAmount > 200) {
    finalAmount = salesAmount - (salesAmount * discount);
    console.log(person + " purhcased $" + salesAmount + " and a 35% discount was applied. Final payment is: $"
       + finalAmount);
} else {
    finalAmount = salesAmount;
    console.log(person + " purchased $" + salesAmount + "and no discount was applied.  Final payment is: $"
       + finalAmount);
}



var person = "George";
var salesAmount = 320;

if (salesAmount > 200) {
    finalAmount = salesAmount - (salesAmount * discount);
    console.log(person + " purhcased $" + salesAmount + " and a 35% discount was applied. Final payment is: $"
        + finalAmount);
} else {
    finalAmount = salesAmount;
    console.log(person + " purchased $" + salesAmount + "and no discount was applied.  Final payment is: $"
       + finalAmount);
}



var flipACoin = Math.floor(Math.random() * 2)

console.log(flipACoin);

if (flipACoin === 0) {
    console.log('Isaac, you should buy a car!');
} else {
    console.log('Isaac, you should buy a house!');
}
