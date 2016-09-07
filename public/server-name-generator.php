<?php

 function newServerName($arrayOne, $arrayTwo){

	shuffle($arrayOne);
	shuffle($arrayTwo);

	$newArrayOne = array_rand($arrayOne, 1);
	$newArrayTwo = array_rand($arrayTwo, 1);
	
	

	$finalName = strtoupper($arrayOne[$newArrayOne]) . ' ' . strtoupper($arrayTwo[$newArrayTwo]);


	return $finalName;
}


$serverAdjectives = ["Ancient", "Fuzzy", "Plush", "Frosty", "Wrinkly", "Meandering", "Glassy", "Bulky", "Mysterious", "Lavish", "Muffled", "Creaky", "Crabby", "Bashful", "Nimble", "Fluttering", "Wild", "Creaky", "Sizzling", "Fussy", "Microscopic", "Ornery", "Graceful", "Momentous", "Peaceful", "Aromatic", "Ubiquitous", "Fluffy", "Invisible", "Crumpled", "Detailed", "Arrogant", "Sentimental", "Illuminated", "Dull", "Boring", "Common", "Flaky", "Injured", "Shiny"];

$serverNouns = ["Ukulele", "Kazoo", "Banjo", "Opera", "Circus", "Trampoline", "Carousel", "Carnival", "Cookie", "Puppy", "Barrel", "Bakery", "Toaster", "Psychic", "Investigator", "Coffee", "Karate", "Furnace", "Accountant", "Armadillo", "Barometer", "Billboard", "Blizzard", "Catamaran", "Crayon", "Dogsled", "Fountain", "Hippopotamus", "Llama", "Mosquito", "Orchid", "Pineapple", "Quicksand", "Ravioli", "Seaplane", "Submarine", "Tadpole", "Volcano", "Wallaby", "Vinyl"];

	

$message = newServerName($serverAdjectives, $serverNouns);




?>

<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Server Name Generator</title>	
<style>

	body {
		

		height: cover;
		background: url('https://source.unsplash.com/WaiPcZlkDFQ');
		background-size: cover;
		background-repeat: no-repeat;
		color: black;
		font-weight: bold;
		font-family: 'Lucida Console', Monaco, monospace;
		text-align: center;
		align-content: center;
		-moz-box-shadow:  0px 0px 0px 0px rgb(128,128,128);
		-webkit-box-shadow:  0px 0px 0px 0px rgb(128,128,128);
		box-shadow:  0px 0px 0px 0px rgb(128,128,128)
	}
	
</style>
</head>
<body>
	<br>
	<br>
	<br>
	<br>
	<h1>Generate A New Server Name</h1>
	<br>
	<br>
	<h2>Your new randomly generated server name is:</h2>
	<br>
	<h1><?php echo $message; ?></h1>
	<br>
	<br>
	
</html>

<!-- 
Create two arrays.
One containing at least 10 adjectives.
Another containing at least 10 nouns.
Create a function that will return a random element from an array.
Create a function that returns the string value of our new server name made by combining a random adjective with a random noun.
Each time you refresh the page a different result should be displayed.
Make sure you have fun with it. Add CSS to make it fancy. -->