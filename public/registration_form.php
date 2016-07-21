<!-- - build a registration form, name it registration_form.php
- first name and last name inputs
- email input
- username
- password
- password confirmation
- sign me up for the newsletter option, make sure this is checked by default
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
        Registration Form        </title>
        <link rel="stylesheet" href="/css/form_exercises.css"/>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel='stylesheet' type='text/css'>

        <script src=""></script>
    </head>
    <body>
         <h1 align="center">
            User Registration Form
        </h1>
    <form class="container" method="POST" action="/registration_form.php">
        <p>
            <label for="email">
                E-mail Address:
            </label>
            <input id="email" name="username" type="text" placeholder="Enter email address" required/>
        </p>
        <p>
            <label for="username">
                User Name:
            </label>
            <input id="username" name="username" type="text" placeholder="Enter Username" required/>
        </p>
        <p>
            <label for="password">
                Password:
            </label>
            <input id="password" name="password" type="password" placeholder="Enter password" required/>
        </p>
        <p>
            <label for="password_confirm">
                Confirm Password:
            </label>
            <input id="password_confirm" name="password_confirm" type="password" placeholder="Confirm password" required/>
        </p>
        <p>
            <button type="submit" />Login
            </button>
            <p>
            <input type="checkbox" id="newsletter" name="newsletter" value="yes" checked/>
            <label for="newsletter">
                Sign Me Up For The Newsletter
            </label>
        </p>
    </form>
    </body>
</html>
