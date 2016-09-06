<?php

$Numbers = array(1,2,3,4,5);
var_dump($Numbers);
print_r($Numbers);


$Numbers = [1,2,3,4,5];
var_dump($Numbers);
print_r($Numbers);

echo $Numbers[3];





$person1 = array('first_name' => 'Rachel', 'last_name' => 'Rost', 'email' => 'rachelrost@email.com', 'phone' => '123-456-7890');  

print_r($person1);


$person2 = array('first_name' => 'Betty', 'last_name' => 'Rost', 'email' => 'brost@email.com', 'phone' => '210-123-4567');

$person3 = array('first_name' => 'David', 'last_name' => 'Rost', 'email' => 'br6415@email.com', 'phone' => '210-987-6543');

$test = array('person1' => $person1, 'person2' => $person2, 'person3' => $person3);
print_r($test);