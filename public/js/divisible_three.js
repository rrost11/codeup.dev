
function getNumbersDivisibleByThree(arr){
	var result = []
	for(var i = 0; i < arr.length; i++){
		var val = arr[i]
		if(Math.floor(val/3) === val/3){
			result.push(val)
		}
	}
	return result
}


var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

var result = getNumbersDivisibleByThree(arr);

console.log(result)