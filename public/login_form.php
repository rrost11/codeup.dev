<!-- - build a login form, call it login_form.php
    - username or email input with placeholder
    - password input type
    - remember me check box
 -->

<?php
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>
            Login Form
        </title>
        <link rel="stylesheet" href="/css/form_exercises.css"/>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel='stylesheet' type='text/css'>

        <script src=""></script>
    </head>
    <body>
        <h1 align="center">
            User Login
        </h1>
    <form method="POST" action="/login_form.php">
        <p>
            <label for="email">
                E-mail Address:
            </label>
            <input id="email" name="username" type="text" placeholder="Enter email address" required/>
        </p>
        <p>
            <label for="password">
                Password:
            </label>
            <input id="password" name="password" type="password" placeholder="Enter password" required/>
        </p>
        <p>
            <button type="submit" />Login
            </button>
            <p>
            <input type="checkbox" id="remember_me" name="remember_me" value="yes" checked/>
            <label for="remember_me">
                Remember Me On Next Visit
            </label>
        </p>
    </form>
    </body>
</html>
