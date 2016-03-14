<?php

//todo:
// make a new file called associate_arrays.php
// Create an array of associate arrays that represent books
// Each book should have a title and an author
// The book author should be an assoicatie array with a first_name key and last_name key
// Be creative and add at least 5 books to the array

$book1 = array('title' => 'Green Eggs & Ham', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss'); 
$book2 = array('title' => 'The Cat In The Hat', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book3 = array('title' => 'The Grinch Who Stole Christmas', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book4 = array('title' => "Oh! The Places You'll Go", 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book6 = array('title' => 'Horton Hears A Who', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book7 = array('title' => 'Hop On Pop', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book8 = array('title' => 'The Sneetches', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book9 = array('title' => 'Horton Hears A Who', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book10 = array('title' => 'Fox in Socks', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book11 = array('title' => 'Marvin K. Mooney Will You Please Go Now', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book12 = array('title' => 'If I Ran The Zoo', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book13 = array('title' => 'Yertle The Turtle', 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book14 = array('title' => "There's A Wocket In My Pocket", 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');
$book15 = array('title' => "You're Only Old Once", 'author_first_name' => 'Dr.', 'author_last_name' => 'Seuss');


$library = array($book1,$book2,$book3,$book4,$book5,$book6,$book7,$book8,$book9,$book10,$book11,$book12,$book13,$book14,$book15);

print_r($library);