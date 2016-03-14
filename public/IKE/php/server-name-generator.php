<?php

// We are going to build a server name generator. To do this, we will need to follow the specs below.

// Create a new file in your public directory named server-name-generator.php.
// Create two arrays.
// One containing at least 10 adjectives.
// Another containing at least 10 nouns.
// Create a function that will return a random element from an array.
// Create a function that returns the string value of our new server name made by combining a random adjective with a random noun.
// Each time you refresh the page a different result should be displayed.
// Make sure you have fun with it. Add CSS to make it fancy.
function pageController()
{

    // Initialize an empty data array.
    $data = [];
    $data['title'] = "Server Name Generator"
    $data['posts'] = [
        [
        'adjectives' => 'genius','adamant','garrulous','incendiary','chic','luminous','spasmodic','boisterous','tenacious','groggy','curious','zealous','clever','witty','jovial','exquisite','redundant';

        'nouns' => 'fish tank','lava lamp','eagle','Codeup','rugby','beagle','black hole','bottle','resumé','lumberjack','speeding ticket','iPhone','pupil','javelina','Tesla','spur','leprechaun';

        ],
        ]

    // Add data to be used in the html view.
    $data['message'] = 'Hello Codeup!';

    // Return the completed data array.
    return $data;
}









$data = [];
$title = "Server Name Generator";

$adjectives = ['genius','adamant','garrulous','incendiary','chic','luminous','spasmodic','boisterous','tenacious','groggy','curious','zealous','clever','witty','jovial','exquisite','redundant'];

$nouns = ['fish tank','lava lamp','eagle','Codeup','rugby','beagle','black hole','bottle','resumé','lumberjack','speeding ticket','iPhone','pupil','javelina','Tesla','spur','leprechaun'];

function getRandomElements($array) {
	$key = array_rand($array);
	$value = $array[$key];
	return $value;
}

function generateServerName($nouns, $adjectives) {
	return getRandomElements($adjectives) . " " . getRandomElements($nouns);
}
$serverName = generateServerName($nouns, $adjectives);

function pageController() {
	$data = [];
	$data['serverName'] = generateServerName($nouns, $adjectives);
	return $data;
}

extract(pageController());

var_dump()

?>

<!DOCTYPE html>



<html>
<head>
	<link rel="stylesheet" type="text/css" href="server_name_generator.css">
    

	<title><?php echo $title; ?></title>


	<center><h1>Creative Server Name Generator</h1></center>
</head>
<body>
	<br>
	<br>
<center><h3>Welcome to the <?php echo $title ?>!</h3></center>

	<br>
	<br>
<center><h4>Your New Server Name is:  <fancy><?php echo $serverName; ?></fancy></h4></center>


</body>
</html>