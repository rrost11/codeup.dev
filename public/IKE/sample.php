<?php

$items = ['First', 'Second', 'Third'];
array_push($items, 'Fourth', 'Fifth', 'Sixth');
print_r($items) . PHP_EOL;


$items = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
$last_item = array_pop($items);
print_r($items) . PHP_EOL;


$items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
$first_item = array_shift($items);
print_r($items) . PHP_EOL;



$items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
$first_item = array_shift($items);
print_r($items) . PHP_EOL;


$fruits = ['apple','grape','tomato','papaya'];

print_r($fruits) . PHP_EOL;

$first = array_shift($fruits);
$second = array_shift($fruits);
$third = array_shift($fruits);
$fourth = array_shift($fruits);

echo $first . PHP_EOL;
echo $second . PHP_EOL;
echo $third . PHP_EOL;
echo $fourth . PHP_EOL;

$chores =['take out the paper','take out the trash','recycle','get the mail'];






