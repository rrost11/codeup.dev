// <!-- Write functions that perform the following actions
// Sum two numbers
// Subtract one number from another
// Multiply two numbers
// Divide two numbers
// Square a number without using the * operator
// Sum two squares without using * or + -->
// Add functionality for each function that makes sure the parameters are numbers
// 	if one fo the parameters is not a number return "inputs must be numeric
// Add functionality to divide() to notify if you divide by zero
// Write a function called isNumeric(number) that returns a boolean	-->


"use strict";


// Exercise #1-------------------Sum----------------------------------------------

function sumItUp(x,y){
	var x;
	var y;
	var result;
	
	result = x + y;

	return result;



}

console.log(sumItUp(5,22));
console.log(sumItUp(100,23));
console.log(sumItUp(3,3));
console.log(sumItUp(1000,2200));
console.log(sumItUp(0,1));


// Exercise #2------------------Subtract-------------------------------------------

function subtract(a,b){
	var a;
	var b;
	var result;

	result = a - b;

	return result;
}


console.log(subtract(5,22));
console.log(subtract(100,23));
console.log(subtract(3,3));
console.log(subtract(100,220));
console.log(subtract(0,1));



// Exercise #3--------------------Multiply------------------------------------------


function multiply(c,d){
	var c;
	var d;
	var result;

	result = c * d;

	return result;
}

console.log(multiply(5,22));
console.log(multiply(10,23));
console.log(multiply(3,3));
console.log(multiply(1000,2));
console.log(multiply(0,1));


// Exercise #4-------------------------Divide------------------------------------------

function divide(e,f){

	var e;
	var f;
	var result;

	result = e/f;

	if (f == 0){

		return("You tried to divide by Zero");

	} else {

	return result;}
}

console.log(divide(20,4));
console.log(divide(30,2));
console.log(divide(3,0));
console.log(divide(100,2));
console.log(divide(1,2));


// Exercise #5---------------------------Square A Number----------------------------------------

function squareIt(c,d,fn){

	function multiply(c,d){
	var c;
	var d;
	var result;

	result = c * d;

	return result;
}

}


// Exercise #6---------------------------Sum of Squares------------------------------------













// Exercise #7---------------------------isNumeric(number) and return Boolean------------------


function isNumeric(number){



	return Boolean(number);

	
}

console.log(isNumeric(5));
console.log(isNumeric(0));
console.log(isNumeric(-8));
console.log(isNumeric(0));
console.log(isNumeric(1));



// ----------------------------------------------------------------------------------------------


function sum(a,b){
	if(isNumeric(a) && isNumeric(b)){
		return a + b;
	} else {
		return "Inputs must be numeric.";
	}
}

console.log(sum(2,2));
console.log(sum("1",20));
console.log(sum("string",20));
console.log(sum(NaN,20));



