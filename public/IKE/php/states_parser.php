<?php

echo "Please input a filename \n";


// set the filename
$filename = trim(fgets(STDIN));


// open the file, 'r' means for reading only
$handle = fopen($filename, 'r');

//read contents from the handle to the end of the file
//contents come in as a single string
$contentString = fread($handle, filesize($filename));

// we need to close the file
fclose($handle);

// convert the single string into an array of strings
$arrayOfStrings = explode(PHP_EOL, $contentString);



foreach($arrayOfStrings as $string) {
	$stateAssociativeArray = [];

	$stateInfo = explode(",", $string);

// stateInfo[0] is the abbreviation as a string
// stateInfro[1] is the state name as a string
	$abbreviation = $stateInfo[0];
	$stateName = $stateInfo[1];

	$stateAssociativeArray[$abbreviation] = $stateName;
	print_r($stateAssociativeArray);

}