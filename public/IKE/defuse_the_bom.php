// TODO: Please follow the instructions below.Download and save defuse_the_bom.php inside ~/vagrant-lamp/sites/codeup.dev/public on your Mac.
View the results in your browser. It shouldn't do much...at first.
Open the file in Sublime and follow the instructions marked "TODO". Test your code in the browser and make sure it behaves as expected.
Finally, commit the changes to your git repository, and push to GitHub.


<!DOCTYPE html>
<html>
<head>
    <title>Defuse the BOM</title>
</head>
<body>
    <h2 id="message">This BOM will self destruct in <span id="timer">5</span> seconds...</h2>

    <button id="defuser">Defuse the BOM</button>

    <script>
        var detonationTimer = 5;
        var interval = 1000;
        var intervalId;

        // TODO: This function needs to be called once every second
        function updateTimer()
        {
            if (detonationTimer == 0) {
                alert('EXTERMINATE!');
                document.body.innerHTML ="codeup.dev/graphics-bombs-923344.gif";
                clearInterval(IntervalId);
            } else if (detonationTimer > 0) {
                document.getElementById('timer').innerHTML = detonationTimer;
            }

            detonationTimer--;
        }
        var intevalId = setInterval(updateTimer,interval);

        // TODO: When this function runs, it needs to
        // cancel the interval/timeout for updateTimer()
        function defuseTheBOM()
        {

        }

        // Don't modify anything below this line!
        //
        // This causes the defuseTheBOM() function to be called
        // when the "defuser" button is clicked.
        // We will learn about events in the DOM lessons
        var defuser = document.getElementById('defuser');
        defuser.addEventListener('click', defuseTheBOM, false);
    </script>
</body>
</html>
