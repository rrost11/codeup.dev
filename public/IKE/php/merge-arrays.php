<?php

$names = ['Tina', 'Dana', 'Mike', 'Amy', 'Adam', 'Mork', 'Mindy'];
$compare = ['Tina', 'Dean', 'Mel', 'Amy', 'Michael', 'Mork', 'Mindy'];
// $students = ['Rachel','Betty','David','Derrick','Amy','Ralph','Mindy','Ralph','Brenda','Heather'];


function mergeArrays($firstArray,$secondArray){
	$combinedArray = [];
	foreach ($firstArray as $key => $value) {
		if ($firstArray[$key] == $secondArray[$key]) {
			$combinedArray[] = $firstArray[$key];
		} else {
			$combinedArray[] = $firstArray[$key];
			$combinedArray[] = $secondArray[$key];
		}
	}
	return $combinedArray;
}

$result = mergeArrays($names, $compare);

print_r($result);






// $result = array_merge($names, $compare, $students);

// $combined = array_values(array_unique($result));
// sort($combined);
// print_r($combined);



// <!-- // Copy search-arrays.php and rename it merge-arrays.php.

// // Write a function called combine_arrays() that will take in two array values as parameters and return a new array
//  // with values from both.

// // If the arrays have the same value at the same index, then it should only be added once.
// // If the values differ, then the value from the first array should be added and then the second.
// // The function will need to use at least two of the array functions we discussed: 
// // array_shift(), array_unshift(), array_push(), and array_pop().
// // Test your combine_arrays() function with $names and $compare. The resulting array should look like:

// //  Array
// //  (
// //      [0] => Tina
// //      [1] => Dana
// //      [2] => Dean
// //      [3] => Mike
// //      [4] => Mel
// //      [5] => Amy
// //      [6] => Adam
// //      [7] => Michael
// //  )
// // Bonus

// // You may have noticed that the solution we created will only work when comparing two arrays of the same size. 
// // What would you do to make this function work while comparing two arrays of differing sizes? What tradeoffs are involved?
//  -->

?>






