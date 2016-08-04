"use strict";



var shouldEndTimerEarly = true;

function ding() {
	if(shouldEndTimerEarly) {
		clearTimeout(timeoutID);
		console.log("ding, ding");
	} else {
		console.log("ding, ding");
	}
}








// function ding(){
// 	console.log("ding ding");
// }

// var timeoutId = setTimeout(ding, 4000);

// console.log("wat");