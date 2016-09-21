<?php

require_once '../bootstrap.php';

Auth::logout();
Auth::redirect('/login.php');