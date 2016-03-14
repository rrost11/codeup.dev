
function getNumbersDivisibleByThree(array){
	var result = []
	for(var i = 0; i < array.length; i++){
		var val = array[i]
		if(Math.floor(val/3) === val/3){
			result.push(val)
		}
	}
	return result
}


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

var result = getNumbersDivisibleByThree(array);

console.log(result)