<?php

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'Els3vier');

require_once 'db_connect.php';

$dropTableQuery = 'DROP TABLE IF EXISTS national_parks';

$createTableQuery = <<<'QUERY'
CREATE TABLE national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(240) NOT NULL,
    location VARCHAR(240) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    PRIMARY KEY (id)
)
QUERY;

$dbc->exec($dropTableQuery);
$dbc->exec($createTableQuery);