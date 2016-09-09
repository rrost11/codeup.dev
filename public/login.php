<?php
function pageController(){

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$message = '';

// check if the form was submitted

if(!empty($_POST)){
	if($username == 'username' && $password == 'password') {
		header('Location: authorized.php');
		die();
	} else {
	$message = "Username or Password is incorrect";
	}
}
return [
'username' => $username,
'password' => $password,
'message' => $message
];
}
extract(pageController());
?>

<!DOCTYPE HTML>
<html>
<head>
    <title>Login Page</title>
    <link rel=stylesheet href="/css/login.css">
</head>
<body>
<h1><? echo $message; ?></h1>
   <div class="container">
        <div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form method="POST" action="login.php" class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="text" id="inputEmail" name='username' class="form-control" placeholder="Username" autofocus>
                <input type="password" name='password' id="inputPassword" class="form-control" placeholder="Password">
                <button name='submit' class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Submit</button>
            </form><!-- /form -->
        </div><!-- /card-container -->
    </div><!-- /container -->
</body>
</html>



    