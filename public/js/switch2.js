// <!-- The following line generates a random number between 0 and 5.
// var luckyNumber = Math.floor(Math.random()* 6)
// Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get all for free!. Write a JS program that logs to the console, how much you will have to pay if your receipt is for $60. Every time you reload your page you should see a different result. Use a switch statement for this exercise.

"use strict"



var luckyNumber = Math.floor(Math.random() * 6);

var receiptAmount = 60;

var discount0 = receiptAmount;

var discount1 = receiptAmount * 0.90;

var discount2 = receiptAmount * 0.75;

var discount3 = receiptAmount * 0.65;

var discount4 = receiptAmount * 0.50;

var discount5 = receiptAmount * 0;


console.log("Your lucky number is " + luckyNumber);

switch (luckyNumber) {
    case 0:
        console.log("You have to pay full price! Your final total is $" + discount0);
        break;
    case 1:
        console.log("You only have to pay $" + discount1);
        break;
    case 2:
        console.log("You only have to pay $" + discount2);
        break;
    case 3:
        console.log("You only have to pay $" + discount3);
        break;
    case 4:
        console.log("You only have to pay $" + discount4);
        break;
    case 5:
        console.log("Congratulations! Your total is $" + discount5);
        break;

}


// Suppose you have been assigned a task and you need to convert a number to the name of a month. 1 should be shown as January, 2 as February and so on. Using a switch statement write the JS code that shows the names of the months in the console.
// Finally, save your work, commit the changes to your git repository, and push to GitHub.
//  -->

var monthAsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var month = monthAsNumber[Math.floor(Math.random() * monthAsNumber.length)];

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}
