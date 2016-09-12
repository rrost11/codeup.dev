<?php

session_start();

// using session info to create a smooth user experience
// check if the user is already logged in
// check if the $_SESSION superglobal has any info for a logged in user

function pageController() {

// check to see if user has submitted the form
if(!empty($_POST)) {

// if so, check both the password and the username
// if both are correct, set key=>value pairs on $_SESSION that store the username

	if($_POST['username'] === 'guest' && $_POST['password'] === 'password') {

		// "log in the user"
		$_SESSION['username'] = $_POST['username'];

	}

}

// check if the user is logged in and forward them to the authroized page
if(isset($_SESSION['username'])) {
	header("Location: authorized.php");
	die();
}

}

pageController();
?>


<!DOCTYPE HTML>
<html>
<head>
    <title>Login Page</title>
    <link rel=stylesheet href="/css/login.css">
</head>
<body>
   <div class="container">
        <div class="card card-container">
        <h1>Login</h1>
            
            <img id="profile-img" class="profile-img-card" src="/img/avatar.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form method="POST" action="login.php" class="form-signin">
              
                <input type="text" id="username" name='username' class="form-control" placeholder="username" autofocus>
                <input type="password" name='password' id="inputPassword" class="form-control" placeholder="password">
                <button name='submit' class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Submit</button>
            </form><!-- /form -->
        </div><!-- /card-container -->
    </div><!-- /container -->
</body>
</html>



    