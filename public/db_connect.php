<?PHP

// Get new instance of PDO object
$dbc = new PDO('mysql:host=127.0.0.1;dbname=parks_db', 'parks_user', 'Els3vier');

// Tell PDO to throw exceptions on error
$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";



?>