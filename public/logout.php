<?php

session_start();

function logOut()
{
    // clear $_SESSION array
    session_unset();

    // delete session data on the server and send the client a new cookie
    session_destroy();

    // ensure client is sent a new session cookie
    session_regenerate_id();

    // start a new session - session_destroy() ended our previous session
    session_start();

}

logOut();

?>

<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Log Out Successful</title>
	<link rel="stylesheet" href="/css/login.css">
</head>
<body>

	
<div class="container">
        <div class="card card-container">
            	<h2>You Have Successfully Logged Out</h2>

        </div><!-- /card-container -->
    </div><!-- /container -->



	<div class="container">
        <div class="card card-container">
            	
   
            <p id="profile-name" class="profile-name-card"></p>
            <form method="POST" action="login.php" class="form-signin">
      
                <button name='submit' class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Log Back In</button>
            </form><!-- /form -->
        </div><!-- /card-container -->
    </div><!-- /container -->
</body>
</html>