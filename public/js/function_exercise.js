'use strict';




function payment(person, salesAmount) {


    var discount = 0.35;
    var finalAmount;

    if (salesAmount > 200) {

        finalAmount = salesAmount - (salesAmount * discount);

        console.log(person + "'s purhcases totaled $" + salesAmount + " and a 35% discount was applied.  " + person + "'s final payment is: $" + finalAmount);

    } else {
        finalAmount = salesAmount;
        console.log(person + "'s purchases totaled $" + salesAmount + " and no discount was applied.  " + person + "'s final payment is: $" + finalAmount);
    }
}


payment("Ryan", 180);



payment("Cameron", 250);



payment("George", 320);


