// "use strict";

// var i = 10;

// while (i > 0) {
// 	console.log(i);
// 	i -= 1;
// }

// console.log("End of # 1 Example");

// Basic For Loop Syntax

// // for(initial statement; condition; statement evaluated after each iteration) {
// 	body
// }


// for (var i = 0; i < 10; i++) {
// 	console.log('for loop iteration # ' + i);
// }

// console.log("End of # 2 Example");



for (var hour = 1; hour <= 5; hour += 1) {

	
	for (var minute = new Date(); minute.setMinutes(00);  minute <= 59; minute += 1) {
		
		console.log(hour + " : " + minute);
	}
	
	
}




// hour 1 minute 00;
// to 
// hour 5 minute 59;
