"use strict";

// This is how you get a random number between 50 and 100
var coneInventory = Math.floor(Math.random() * 50) + 50;
var customerOrder;
console.log("There are " + coneInventory + " ice cream cones to sell today.");

// do sell cones
do {
    // This is how you get a random number between 1 and 5
    customerOrder = Math.floor(Math.random() * 5) + 1;

    // if I have enough cones, remove cones from inventory
    if (coneInventory >= customerOrder) {

        // update inventory to be old inventory minus what we just sold
        coneInventory = coneInventory - customerOrder;
        console.log("I sold a customer " + customerOrder + " ice cream cones!");
    } else {
        console.log("I can not fulfill an order for " + customerOrder + " ice cream cones. I only have " + coneInventory + " ice cream cones left.");
    }

} while (coneInventory > 0);
console.log("I sold all of the ice cream cones today!");




// // 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones





var i = 2;

while (i < 66000) {
    console.log(i);
    i = (i * 2);
}
