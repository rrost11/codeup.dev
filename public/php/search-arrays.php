<?php

function isInArray($query,$names)
{
$result = array_search($query,$names);
if ($result !== false){
	return true;
} else {

} return false;
	}


function compareArrays($names, $compare, $a)
{

	foreach ($names as $value){
		if(arrayHasValue($value, $compare)){
			$a++;
		}
	}
	return $a;
}



$names = ['Tina', 'Dana', 'Mike', 'Amy', 'Adam', 'Mork', 'Mindy'];
$compare = ['Tina', 'Dean', 'Mel', 'Amy', 'Michael', 'Mork', 'Mindy'];
$a = 1;

echo isInArray('Tina',$names) ? "Tina IS in the array\n" : "Tina is NOT in the array\n" . PHP_EOL;
echo isInArray('Bob',$names) ? "Bob IS in the array\n" : "Bob is NOT in the array\n" . PHP_EOL;

echo 'The arrays have ' . compareArrays($names, $compare) . "values in common\n" . PHP_EOL;











