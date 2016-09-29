<?php 

require_once '../Input.php';
require_once '../db_credentials.php';
require_once '../db_connect.php';

function isValidDate($dateString)
{
    return strtotime($dateString) !== false;
}

function formatDate($dateString)
{
    $timestamp = strtotime($dateString);
    return date('Y-m-d', $timestamp);
}

function getNumberOfParks($dbc)
{
    $query = 'SELECT COUNT(*) FROM national_parks';
    return $dbc->query($query)->fetchColumn();
}

function getParkFromInput()
{
    return [
        'name'             => Input::get('name', ''),
        'date_established' => Input::get('date_established', ''),
        'location'         => Input::get('location', ''),
        'area'             => Input::get('area', ''),
        'description'      => Input::get('description', ''),
    ];
}

function validatePark($park)
{
    $success = true;
    $errors  = [];

    if (empty($park['name'])) {
        $sucess = false;
        $errors['name'] = 'name cannot be empty!';
    }

    if (!isValidDate($park['date_established'])) {
        $success = false;
        $errors['date_established'] = 'date established must be a valid date.';
    }

    if (empty($park['location'])) {
        $success = false;
        $errors['location'] = 'location cannot be empty!';
    }

    if (empty($park['area']) || !is_numeric($park['area'])) {
        $success = false;
        $errors['area_in_acres'] = 'area must be a valid number!';
    }

    return [
        'success' => $success,
        'errors'  => $errors
    ];
}

function getAllParks($dbc, $limit, $offset)
{
    $query = "SELECT * FROM national_parks LIMIT :limit OFFSET :offset";
    $stmt  = $dbc->prepare($query);

    $stmt->bindValue('limit',  $limit,  PDO::PARAM_INT);
    $stmt->bindValue('offset', $offset, PDO::PARAM_INT);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function savePark($dbc, $park)
{
    $query = 'INSERT INTO national_parks (name, location, date_established, area_in_acres, description)';
    $query.= 'VALUES (:name, :location, :date_established, :area_in_acres, :description)';
    $stmt  = $dbc->prepare($query);
    $stmt->bindValue('name',             $park['name'],             PDO::PARAM_STR);
    $stmt->bindValue('location',         $park['location'],         PDO::PARAM_STR);
    $stmt->bindValue('date_established', $park['date_established'], PDO::PARAM_STR);
    $stmt->bindValue('area_in_acres',    $park['area'],             PDO::PARAM_STR);
    $stmt->bindValue('description',      $park['description'],      PDO::PARAM_STR);
    $stmt->execute();
}

function onPostRequest($dbc)
{
    $park      = getParkFromInput();
    $validator = validatePark($park);

    if ($validator['success']) {
        $park['date_established'] = formatDate($park['date_established']);
        savePark($dbc, $park);
    }

    return [
        'success' => $validator['success'],
        'errors'  => $validator['errors']
    ];
}

function pageController($dbc)
{
    $numParks = getNumberOfParks($dbc);
    $page     = Input::get('page', 1);
    $limit    = 4;

    $offset  = ($page - 1) * $limit;
    $maxPage = ceil($numParks / $limit);

    $nationalParks = getAllParks($dbc, $limit, $offset);

    return [
        'page'          => $page,
        'maxPage'       => $maxPage,
        'nationalParks' => $nationalParks,
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    extract(onPostRequest($dbc));
}

extract(pageController($dbc));

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>National Parks</title>
</head>
<body>

    <?php if (isset($success) && $success): ?>
        <h2>Park Successfully Created!</h2>
    <?php endif; ?>

    <h1>Here are some national parks!</h1>
    <p>
        <?php if ($page > 1): ?>
            <a href="?page=<?= $page - 1 ?>">Previous</a>
        <?php endif; ?>

        <?php if ($page < $maxPage): ?>
            <a href="?page=<?= $page + 1 ?>">Next</a>
        <?php endif; ?>
    </p>
    <table>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Date Established</th>
            <th>Area in Acres</th>
            <th>Description</th>
        </tr>
        <?php foreach ($nationalParks as $park): ?>
            <tr>
                <td><?= $park['name'] ?></td>
                <td><?= $park['location'] ?></td>
                <td><?= $park['date_established'] ?></td>
                <td><?= $park['area_in_acres'] ?></td>
                <td><?= $park['description'] ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
    <p>Page <?= $page ?> of <?= $maxPage ?>.</p>

    <hr>
    
    <h2>Create A New Park</h2>

    <?php if (isset($success) && !$success): ?>

        <h3>There was an error with your submission.</h3>
        <?php foreach ($errors as $error): ?>
            <p><?= $error ?></p>
        <?php endforeach; ?>

    <?php endif; ?>
    
    <form method="POST">

        <label for="park-name">
            Name:<input name="name" id="park-name" type="text">
        </label>
        <br>

        <label for="park-location">
            Location:<input name="location" id="park-location" type="text">
        </label>
        <br>

        <label for="park-date-established">
            Date Established:<input name="date_established" id="park-date-established" type="text">
        </label>
        <br>

        <label for="park-area">
            Area in Acres<input name="area" id="park-area" type="text">
        </label>
        <br>

        <label for="park-description">
            Description:<textarea id="park-description" name="description" cols="30" rows="10"></textarea>
        </label>
        <br>

        <input type="submit">
    </form>

</body>
</html>