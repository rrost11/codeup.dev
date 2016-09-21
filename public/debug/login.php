<?php

require_once '../bootstrap.php';

function attemptLogin()
{
    $username = Input::get('username', '');
    $password = Input::get('password', '');

    if (Auth::attempt($username, $password)) {
        Auth::login($username);
        Auth::redirect('/authorized.php');
    }
}

function pageController()
{
    $message = 'Please Log In.';

    if (Auth::check()) {
        Auth::redirect('authorized.php');
    }

    if (Request::isPost()) {
        attemptLogin();
        $message = 'Wrong Username or Password.';
    }

    return [
        'message' => $message,
    ];
}

extract(pageController());

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h1><?= $message ?></h1>
    <form class="form" method="POST">
        <div class="form-group">
            <label for="">Username</label>
            <input name="username" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input name="password" class="form-control" type="password">
        </div>
        <input class="btn btn-primary btn-block" type="submit">
    </form>
</div>
</body>
</html>