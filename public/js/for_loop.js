"use strict";



for (i = 1; i < 10; i++) {
		var number = 9;

		console.log(number + ' * ' + i + ' = ' + (number * i));

	}



for (var i = 1; i <= 10; i++) {

    var randomNumber = Math.floor(Math.random() * 180) + 20;


    if (randomNumber % 2 == 0) {

        console.log("The random number is: " + randomNumber + " and it is even!");

    } else {

        console.log("The random number is: " + randomNumber + " and it is odd!");
    }


}



for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}
