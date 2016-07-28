// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.



'use strict';

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

var customerOrder = ; 

console.log("Today, there are a total of " + allCones + " ice cream cones to sell.");

var customerOrder = cones;

var coneInventory = (coneInventory - customerOrder);


do {
	// This is how you get a random number between 1 and 5
	customerOrder = Math.floor(Math.random() * 5) + 1;
}

while (coneInventory <= allCones); {
  

    console.log("There are " + coneInventory + " left to sell today.");
    var coneInventory = (coneInventory - customerOrder);

    if (coneInventory >= customerOrder) {
        console.log("A customer ordered and bought " + customerOrder + " ice cream cones.");
        coneInventory = coneInventory - customerOrder;
    } else {
        console.log("A customer ordered " + customerOrder + " ice cream cones but there are only " + coneInventory + " cones left. The customer's order was not filled.");

        console.log("A customer ordered " + customerOrder + " ice cream cones. Yay! We have sold all the ice cream cones today!");
    }

}





// Name how many cones have to be sold today

// Dislplay the customers order of how many cones
// Validate that that there are enough cones left
// If there are enough cones left, state that the customer has bought "x" amount of cones
// If there are not enough cones state that you cannot sell that many cones, you only have "x" amount left
// When you have sold all the cones, state "Yay! I sold all the cones today!"

// Calculate total number of cones to be sold minus most recent custormer order
// state how many cones are left to be sold
// new customer is randomly assigned a number of cones to be bought





// // 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones





var i = 2;

while (i < 66000) {
    console.log(i);
    i = (i * 2);
}
