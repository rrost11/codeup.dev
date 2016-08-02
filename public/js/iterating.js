(function() {
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["John", "Paul", "George", "Ringo"];



    // TODO: Create a log statement that will log the number of elements in the names array.


    console.log("There are " + names.length + " elements in the array.");


    // TODO: Create log statements that will print each of the names array elements individually.

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

var element;

for (var i = 0; i < names.length; i += 1) {
	element = names[i];
	console.log(element);

}

var namesInReverseOrder = [];
var namesInReverseOrder = names.reverse();

	for (var i = 3; i >= 0; i -= 1) {
		element = names[i];
		console.log(element);

	}
// -----------------------------------------------For Each Loop Iterating Array----------------------------

names.forEach(function(element, index, array) {
	console.log(element);
})

})();
