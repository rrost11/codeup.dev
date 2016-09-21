<?php

require_once '../bootstrap.php';

function pageController()
{
    if (! Auth::check()) {
        Auth::redirect('/login.php');
    }

    return [
        'user' => Auth::user(),
    ];
}

extract(pageController());

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Authorized Page</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, <?= $user ?>!</h1>
        <a class="btn btn-block btn-danger" href="/logout.php">
            Log Out
        </a>
    </div>
</body>
</html>