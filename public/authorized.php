<?php 


session_start();

function pageController() {

    // check to see if the user is not logged in
    if(!isset($_SESSION['username'])) {

    // if they are not logged in, then send them back to login.php
    // otherwise, load the page
    header("Location: login.php");
    die();
    }
    $data = [];
    $data['username'] = $_SESSION['username'];

    return $data;
}

extract(pageController());


?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Authorized</title>
	<link rel="stylesheet" href="/css/login.css">
</head>
<body>

	<div class="container">
        <div class="card card-container">
            	<h2>Hello, Your Session Is Authorized.</h2>

        </div><!-- /card-container -->
    </div><!-- /container -->


<div class="container">
        <div class="card card-container">
          
            
            <p id="profile-name" class="profile-name-card"></p>
            <form method="POST" action="logout.php" class="form-signin">
      
                <button name='submit' class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Logout of Current Session</button>
            </form><!-- /form -->
        </div><!-- /card-container -->
    </div><!-- /container -->






</body>
</html>