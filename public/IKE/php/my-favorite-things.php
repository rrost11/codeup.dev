<?php

// Make sure you have fun with it. Add CSS to make it fancy.
// My Favorite Things

// We are going to build a simple list of your favorite things and display these in the form of a table in HTML.

// Create a new file named my-favorite-things.php and put it in your public directory.
// Create an array of your favorite things. This array should contain at least five things.
// We will need to loop through this array and display each element inside your HTML.
// Use an HTML table for this display.
// Use CSS to add a light gray background on every other row for a nice effect.
// Have fun and make it beautiful!
$title = "Rachel's Favorite Things";

$favoriteThings = ['Shelby','Steel Magnolias','Houston Texans','San Antonio Spurs','The Color Blue','Lasagna','Cheese Enchiladas','road trips','craft beer','Apple Products','traveling'];


function getRandomThing($array) {
	$key = array_rand($array);
	$value = $array[$key];
	return $value;
}

function displayFavorite($favoriteThings) {
	return getRandomThing($favoriteThings) . " " ;
}
$rachelsFavorite = displayFavorite($favoriteThings);

function pageController() {
	$data = [];
	$data['favoriteThings'] = displayFavorites($favoriteThings);
	return $data;
}

extract(pageController());



?>

<!DOCTYPE html>

<html>
<head>
	<title>Favorite Things</title>

<style>
	body {
		background-color:  #3498db;
		color:	#f1c40f;
		
	}

</style>

</head>

<body>
	<h1>All of RR's Favorite Things</h1>

	<?php foreach($favoriteThings as $thing) : ?>
		<tr><td><?= $thing; ?></td></tr>
	<?php endforeach; ?>	




</body>
</html>


