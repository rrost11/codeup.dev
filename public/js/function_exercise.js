'use strict';

// Exercise #1
var averageGrade = (70 + 80 + 95)/3;

if(averageGrade > 80) {
    console.log("You're awesome!");
} else {
    console.log("You need to practice more!");
}


function gradeStudent(grade1, grade2, grade3) {
    var averageGrade = (grade1 + grade2 + grade3) / 3;
    var message;
    if(averageGrade > 80) {
    message = "You're awesome!";
} else {
    message ="You need to practice more!";
}
    return message;
}

console.log(gradeStudent(75,90,80));
console.log(gradeStudent(25,100,70));
console.log(gradeStudent(80,85,78));






// Exercise #2


function payment(person, salesAmount) {


    var discount = 0.35;
    var finalAmount;
    var message;

    if (salesAmount > 200) {

        finalAmount = salesAmount - (salesAmount * discount);

        message = person + "'s purhcases totaled $" + salesAmount + " and a 35% discount was applied.  " + person + "'s final payment is: $" + finalAmount;
        

    } else {
        finalAmount = salesAmount;
        message = person + "'s purchases totaled $" + salesAmount + " and no discount was applied.  " + person + "'s final payment is: $" + finalAmount;
        
    }
        return message;
}


console.log(payment("Ryan", 180));

console.log(payment("Cameron", 250));

console.log(payment("George", 320));





// Exercise #3


function carOrHouse(){

    var flipACoin = Math.floor(Math.random() * 2);
    var message; 

if (flipACoin === 0) {
    message ='Isaac, you should buy a car!';
} else {
    message = 'Isaac, you should buy a house!';
}
    return message;
}

console.log(carOrHouse());
console.log(carOrHouse());
console.log(carOrHouse());
console.log(carOrHouse());
console.log(carOrHouse());


