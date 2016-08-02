'use strict';

// global variable -- variable defined outside of a function
//   - part of the window object
//   - in the global namespace
//   - accessable from anywhere (inside functions)

// local variables overrite variables in their scope, not globally
// local variable -- variable defined inside a function
// scope -- where a variable can be accessed -- curly braces of a function

var pizza = 'pineapple, onion, hot sauce, and extra cheese';

function tellMeAboutPizza () {
    var pizza = 'pepperoni and green peppers, mushrooms, olives, chives';
    console.log(pizza);
}

console.log(pizza);


// hoisting
// two different ways to define a function
// same for functions
// hoisting issues with the variable version
// avoid it by following best practices and declaring variables at the start of the scope you use them in

function sayHello (name) {
    return 'hello' + name;
}

// be aware of hoisting when using this version
var sayHello = function (name) {
    return 'hello' + name;
}

// iife -- immediately invoked function expression
// protects our code eg sensitive variables
// (function(){/* your code here */})();


// .js file
'use strict';

(function(){

    // all of your code goes here

})();
// EOF


// how i write an iife
// 1.
// ()();
// 2.
// (function)();
// 3.
// (function())();
// 4.
// (function(){})();
// 5.
// (function(){
    // start writing code here
// })();