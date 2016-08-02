// <!-- Write functions that perform the following actions
// Sum two numbers
// Subtract one number from another
// Multiply two numbers
// Divide two numbers
// Square a number without using the * operator
// Sum two squares without using * or + -->
// Add functionality for each function that makes sure the parameters are numbers
// 	if one of the parameters is not a number return "inputs must be numeric
// Add functionality to divide() to notify if you divide by zero
// Write a function called isNumeric(number) that returns a boolean	-->


"use strict";


function isNumeric(x) {
    if (isNaN(x)) {

        return false;

    } else {

        return true;
    }
}

// Exercise #1-------------------Sum----------------------------------------------

function sumTwoNumbers(x, y) {

    var result;

    if (isNumeric(x) && isNumeric(y)) {
        result = x + y;
        return result;

    } else {

        return "Inputs must be numeric";
    }
}



console.log(sumTwoNumbers(5, 22));
console.log(sumTwoNumbers(100, 23));
console.log(sumTwoNumbers(3, 3));
console.log(sumTwoNumbers(1000, 2200));
console.log(sumTwoNumbers(0, 1));


// Exercise #2------------------Subtract-------------------------------------------

function subtractTwoNumbers(a, b) {

    var result;

    if (isNumeric(a) && isNumeric(b)) {
        result = a - b;
        return result;

    } else {

        return "Inputs must be numeric";
    }
}



console.log(subtractTwoNumbers(5, 22));
console.log(subtractTwoNumbers(100, 23));
console.log(subtractTwoNumbers(3, 3));
console.log(subtractTwoNumbers(100, 220));
console.log(subtractTwoNumbers(0, 1));



// Exercise #3--------------------Multiply------------------------------------------


function multiplyTwoNumbers(c, d) {

    var result;

    if (isNumeric(c) && isNumeric(d)) {
        result = c * d;
        return result;

    } else {

        return "Inputs must be numeric";
    }
}



console.log(multiplyTwoNumbers(5, 22));
console.log(multiplyTwoNumbers(10, 23));
console.log(multiplyTwoNumbers(3, 3));
console.log(multiplyTwoNumbers(1000, 2));
console.log(multiplyTwoNumbers(0, 1));


// Exercise #4-------------------------Divide------------------------------------------

function divideTwoNumbers(e, f) {


    var result;

    result = e / f;

    if (f === 0) {

        return ("You tried to divide by Zero");

    } else {

        return result;
    }
}

console.log(divideTwoNumbers(20, 4));
console.log(divideTwoNumbers(30, 2));
console.log(divideTwoNumbers(3, 0));
console.log(divideTwoNumbers(100, 2));
console.log(divideTwoNumbers(1, 2));


// Exercise #5---------------------------Square A Number----------------------------------------



function squareANumber(x) {

    var result;

    if (isNumeric(x)) {

        result = multiplyTwoNumbers(x, x);

        return result;

    } else {

        return "Inputs must be numeric";
    }
}

console.log(squareANumber(2));
console.log(squareANumber(4));
console.log(squareANumber(3));
console.log(squareANumber(10));
console.log(squareANumber(12));

// Exercise #6---------------------------Sum of Squares------------------------------------


function sumTwoSquares(a, b) {

    var result;

    if (isNumeric(a) && isNumeric(b)) {

        result = sumTwoNumbers(squareANumber(a), squareANumber(b));

        return result;

    } else {

        return "Inputs must be numeric";
    }
}

console.log(sumTwoSquares(20, 4));
console.log(sumTwoSquares(30, 2));
console.log(sumTwoSquares(3, 0));
console.log(sumTwoSquares(100, 2));
console.log(sumTwoSquares(1, 2));

// Exercise #7---------------------------Convert number to boolean------------------


function numberToBoolean(x) {

    return Boolean(x);


}

console.log(numberToBoolean(5));
console.log(numberToBoolean(0));
console.log(numberToBoolean(-8));
console.log(numberToBoolean(0));
console.log(numberToBoolean(1));



// ----------------------------------------------------------------------------------------------


function isNumeric(x) {
    if (isNaN(x)) {

        return false;

    } else {

        return true;
    }
}

console.log(isNumeric(2));
console.log(isNumeric("1"));
console.log(isNumeric("string"));
console.log(isNumeric(null));
