<?php

// TODO: Create your inspect() function here

// Using functions from the PHP manual's variable functions page, complete the next steps.

// At the top of the file, create a new function called inspect() that takes in one argument. Your inspect() function should look at the passed argument and return a string with the variable's type and its value, similar to "The integer is 12.".

// Use your new function to inspect the given variables one at a time. Create these calls in an iterative manner: add a call to inspect() for $num1 and then test your code, add a call to inspect() for $num2 and then test your code, etc.

// There are some special cases your inpsect() function needs to handle. In particular:

// If the variable is NULL, return "The value is NULL."
// If the variable is an array, return "The value is an array"
// If the variable is an empty array, return "The value is an empty array."
// If the variable is a boolean, make sure your return value says whether it is TRUE or FALSE.
// If the variable is an empty string, return "The string is empty."



// $someVar = true;
// $anotherVar = flase;

// function inspect($para){
// 	if(is_null($para)){
// 		return "The Value is NULL";
// 	} else if(is_bool($para)){
// 		if($para) {
// 			return "The Value is TRUE";
// 		} else {
// 			return "The Value is FALSE"
// 		}
// 	}
// }
// echo inspect($someVar);
// echo inspect($anotherVar);

function inpsect($value){
	$message = '';
	$type = gettype($value);

	if($type == 'NULL') {
		$message = "The Value Is Null.";
	} else if($type == '$array'  && empty($value)) {
		$message = "The Value Is An Array.";
	} else if($type == 'boolean'){
		$message = ($value) ? "The $type is TRUE." : "The $type is FALSE."
	} else if {
		
	}
}






// boolval
// floatval(var)
// intval(var)
// strval(var)




// Do not mofify these variables!
$string1 = "I'm a little teapot";
$string2 = '';
$array1 = [];
$array2 = [1, 2, 3];
$bool1 = true;
$bool2 = false;
$num1 = 0;
$num2 = 0.0;
$num3 = 12;
$num4 = 14.4;
$null = NULL;

// TODO: After each echo statement, use inspect() to output the variable's type and its value

echo 'Inspecting $num1:' . PHP_EOL;
echo inspect($num1);

echo 'Inspecting $num2:' . PHP_EOL;
echo inspect($num2);
echo 'Inspecting $num3:' . PHP_EOL;
echo inspect($num3);
echo 'Inspecting $num4:' . PHP_EOL;
echo inspect($num4);
echo 'Inspecting $null:' . PHP_EOL;
echo inspect($null);
echo 'Inspecting $bool1' . PHP_EOL;
echo inspect($bool1);
echo 'Inspecting $bool2' . PHP_EOL;
echo inspect($bool2);
echo 'Inspecting $string1' . PHP_EOL;
echo inspect($string1);
echo 'Inspecting $string2' . PHP_EOL;
echo inspect($string2);
echo 'Inspecting $array1' . PHP_EOL;
echo inspect($array1);
echo 'Inspecting $array2' . PHP_EOL;
echo inspect($arrya2);