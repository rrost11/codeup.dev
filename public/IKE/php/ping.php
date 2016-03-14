<?php

function pageController()
{
    $counter = isset($_GET['counter'])? $_GET['counter']: 0;
    
    return array(
        'counter' => $counter
        );
}

var_dump($_GET);
extract(pageController());
?>




<!DOCTYPE html>

<html>
<head>
    
    <link rel="stylesheet" type="text/css" href="counter.css"> 
    <link href='https://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>

     <title>Ping</title>

</head>
<body>
   
    <br>
    <br>
        <div class="box"> 
            <h1> Counter = <?php echo $counter ?></h1>
        
                <div class="button">
                    <a href="pong.php?=<?php echo $counter +1 ?>">Hit</a>
                </div>         
                <div class="button">
                    <a href="counter.php?counter=<?php echo $counter -1 ?>">Miss</a>
                </div>
        <div>
</body>
</html>