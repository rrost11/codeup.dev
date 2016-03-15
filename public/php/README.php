<?php
// Download and save search-arrays.php to your exercises directory. Commit each step in git and push to GitHub at the end of the exercise.

// Create a function that returns TRUE or FALSE if an array value is found. Search for Tina and Bob in $names. Make sure it works as expected.

// Create a function to compare 2 arrays that returns the number of values in common between the arrays. Use the 2 example arrays and make sure your solution uses array_search().



$names = ['Tina', 'Dana', 'Mike', 'Amy', 'Adam'];

$compare = ['Tina', 'Dean', 'Mel', 'Amy', 'Michael'];


$query = 'Tina';

$result = array_search($query, $names);

if ($result) {
    echo $names[$result];
}

print_r($result);
