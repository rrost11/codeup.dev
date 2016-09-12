<!-- Create some reusable code. To fill in some of the functions, you will need to read about and use the $_REQUEST superglobal for PHP.

Create a file called functions.php and add the following functions:

inputHas($key): returns true or false based on whether the key is available.
inputGet($key): returns the value specified by the key, or null if the key is not set.
escape($input): returns the input as a safely escaped string.
Now, go back to the ping/pong and user login lessons from PHP with HTML and require the functions file you created. Use the input wrapper functions you created in place of accessing $_GET or $_POST directly. Also, use the escape function anywhere you need to echo user input.

Create a small templated web site.

Create a header, navbar, and footer all as separate PHP files. Add some HTML content to them as appropriate for each one.
Create an index.php file that includes all the other templates. Try viewing the index and see if it appears as you expected. Make sure you also view the page source to make sure that things come out just right. -->

<?php

function inputHas($key) {

	// check if $_REQUEST[$key] isset
	// check to see if $_REQUEST has a key/value
	// return true if the $key is set on $_REQUEST
	// else return true if it is not
	return isset($_REQUEST[$key]);

}


function inputGet($key) {

	// if inputHas($key)
	// return the value specificied by the key
	// or return null if the key is not set
	if(inputHas($key)) {
		return 
	}


}




?>


<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	
</body>
</html>