<?php

function pageController() {
	$data = [];



	// old way 
	if(isset($_GET['count'])) {
		$data['counter'] = $_GET['counter'];
	} else {
		$data['counter'] = 0;
	}


	// new way
	if(inputHas('counter')) {
		$data['counter'] = inputGet('counter');
	} else {
		$data['counter'] = 0;
	}
}

$data['up'] = $data['counter'] + 1;
$data['down'] = $data['counter'] - 1;

return data;



?>