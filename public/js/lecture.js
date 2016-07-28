// ternary -- three

(condition) ? returnIfTrue: returnIfFalse;


// if statement syntax, curly braces, indentation

// DO NOT DO THIS
if (condition)
// do something

// do this instead
// notice the curly brace placement and indentation
    if (condition) {
        // do something
    }
    // same goes for while and for


    // control structures: if-else, switch, while, for
    // control what code is executed and how many times
    // anything can go inside of control structures
if (condition) {
    if (condition) {

    } else {
        for ( /*...*/ ) {
            if (condition2) {

            }
        }
    }
} else {
    while (something) {
        if (somethingElse) {
            for ( /*...*/ ) {

            }
        }
    }
}

// If/Else Statement Examples

var whatAmI = "I am a string.";

if (typeof whatAmI === "boolean") {
    console.log("You are a boolean.");
} else if (typeof whatAmI === "number") {
    console.log("You are a number.");
} else if (typeof whatAmI === "string") {
    console.log("You are a string.");
} else if (typeof whatAmI === "function" || typeof whatAmI === "object") {
    console.log("You are an object.");
} else if (typeof whatAmI === "undefined") {
    console.log("You are undefined.");
} else {
    console.log("I have no clue.");
}


// Switch Statement Examples

var whatAmI = "I am a string.";

switch (typeof whatAmI) {
    case "boolean":
        console.log("You are a boolean.");
        break;
    case "number":
        console.log("You are a number.");
        break;
    case "string":
        console.log("You are a string.");
        break;
    case "function":
    case "object":
        console.log("You are an object.");
        break;
    case "undefined":
        console.log("You are undefined.");
        break;
    default:
        console.log("I have no clue.");
}


// Do While Loop Examples

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var i = 10;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}


var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);



// For Loop Examples


for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}


// Break/Continue Examples

var random = Math.floor((Math.random() * 100) + 1);

console.log('Random stopping point is: ' + random);

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (random == i) {

        console.log('We have reached the random stopping point: break!');

        // use the break keyword to exit from the while loop
        break;

        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}




for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}
