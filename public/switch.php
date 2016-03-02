<!-- Commit your code to GitHub after each step.

Create a new file named switch.php in your exercises directory with the following code:

 <?php

 // Set the default timezone
 date_default_timezone_set('America/Chicago');

 // Get Day of Week as number
 // 1 (for Monday) through 7 (for Sunday)
 $dayOfWeek = date('N');

 switch($dayOfWeek) {
     case 1:
         // Output Monday
     case 2:
         // Output Tuesday
     // etc through day 7
 }
Test and verify the results before proceeding by creating a matching if block. The output should be identical. -->