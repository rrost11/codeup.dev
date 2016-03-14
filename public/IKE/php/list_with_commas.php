<?php
// Exercises

// If we wanted to display our array as the ending of this string:
// echo "Some of the most famous fictional theoretical physicists are {$famousFakePhysicists}.";
// then we'd need to convert our $physicistsArray into a human friendly $famousFakePhysicists string.
// If we implode() our array with commas, this sentence will not be grammatically correct. 
// Whether you subscribe to the Oxford Comma or not, any listing of items should end with and [final item].

// This list should read:

// Gordon Freeman, Samantha Carter, Sheldon Cooper, Quinn Mallory, Bruce Banner, and Tony Stark.

// Create a new file named list_with_commas.php in your exercises repo to solve these exercises. Commit and push each step.
// Using the $physicistsString from the lecture notes and your new knowledge of pushing, popping, exploding, and imploding:
// Create the $famousFakePhysicists string that lists the physicists and contains the "and" at the end.

// This should end with this line:
// echo "Some of the most famous fictional theoretical physicists are {$famousFakePhysicists}.";
// and output this result:

// Some of the most famous fictional theoretical physicists are Gordon Freeman, Samantha Carter, Sheldon Cooper, Quinn Mallory, Bruce Banner, and Tony Stark.
// Turn your solution into a function named humanizedList(). 
// You should be able to pass the $physicistsArray as the only parameter, and your function will return the result.

// Example code:
//  <?php

//  // Converts array into list n1, n2, ..., and n3
//  function humanizedList($array) {
//    // Your solution goes here!
//  }

//  // List of famous peeps
//  $physicistsString = 'Gordon Freeman, Samantha Carter, Sheldon Cooper, Quinn Mallory, Bruce Banner, Tony Stark';

//  // TODO: Convert the string into an array
//  $physicistsArray = [];

//  // Humanize that list
//  $famousFakePhysicists = humanizedList($physicistsArray);

//  // Output sentence
//  echo "Some of the most famous fictional theoretical physicists are {$famousFakePhysicists}.";

// Update your code to list the physicists by first name, in alphabetical order.

// Create a second parameter to make alphabetical sorting optional.

// Hint: Default alphabetical sorting to false. If no second parameter is passed to the function no sorting should take place.

$physicistsString = 'Gordon Freeman, Samantha Carter, Sheldon Cooper, Quinn Mallory, Bruce Banner, Tony Stark';

$physicistsArray = explode(', ', $physicistsString);
echo $physicistsArray;

print_r($physicistsArray);

$physicistsString = implode(', ',$physicistsArray);

echo $physicistsString;

print_r($physicistsString);

$changeArray = array_pop($physicistsArray);
print_r($physicistsArray);


array_push($physicistsArray, 'and', $changeArray);

print_r($physicistsArray);

$famousFakePhysicists = implode(', ', $physicistsArray);

print_r($famousFakePhysicists);





function $famousFakePhysicists = humanizedList($physicistsArray);

echo "Some of the most famous fictional theoretical physicists are {$famousFakePhysicists}.";









// function humanizedList($arraygoeshere){

// }








