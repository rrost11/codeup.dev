<?php

$Numbers = array(1,2,3,4,5);
var_dump($Numbers);
print_r($Numbers);


$Numbers = [1,2,3,4,5];
var_dump($Numbers);
print_r($Numbers);

echo $Numbers[3];





$person1 = array('first_name' => 'Rachel', 'last_name' => 'Rost', 'email' => 'rachel.v.rost@gmail.com', 'phone' => '713-705-5559');  

print_r($person1);

$person1 = array('first_name' => 'Rachel', 'last_name' => 'Rost', 'email' => 'rachel.v.rost@gmail.com', 'phone' => '713-705-5559');

$person2 = array('first_name' => 'Betty', 'last_name' => 'Rost', 'email' => 'brost@sarodeo.com', 'phone' => '210-495-1609');

$person3 = array('first_name' => 'David', 'last_name' => 'Rost', 'email' => 'br6415@aol.com', 'phone' => '210-215-4711');

$people = array('person1' => $person1, 'person2' => $person2, 'person3' => $person3);
print_r($people);