<?php
define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'nastional_parks');
define('DB_USER', 'parks_user');
define('DB_PASS', 'Els3vier');
require 'db_connect.php';
echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . PHP_EOL;

