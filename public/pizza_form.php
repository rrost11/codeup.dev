<!-- - build an order form for a pizza, name it pizza_form.php. Use inputs you think are best!
    - quantity
    - crust style
    - size
    - toppings
    - delivery info including name, phone, address, credit card info, additional instructions
    - BONUS: show toppings with images
 -->

<?php
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>
            Pizza Order Form
        </title>
        <link rel="stylesheet" href="/css/form_exercises.css"/>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel='stylesheet' type='text/css'>

        <script src=""></script>
    </head>
    <body>
        <h1 align="center">Pizza Order Form</h1>
        <br>



        <form method="POST" action="/pizza_form.php">
            <h2>Delivery Information</h2>
        <p>
            <label for="firstname">
                First Name:
            </label>
            <input id="firstname" name="firstname" type="text" placeholder="Enter First Name" required/>
        </p>
        <p>
            <label for="username">
                Last Name:
            </label>
            <input id="lastname" name="lastname" type="text" placeholder="Enter Last Name" required/>
        </p>
        <p>
            <label for="phone">
                Phone Number:
            </label>
            <input id="phone" name="phone" type="text" placeholder="Enter Phone Number" required/>
        </p>
        <p>
            <label for="street_address">
                Street Address:
            </label>
            <input id="street_address" name="street_address" type="text" placeholder="Enter Street Address" required/>
        </p>
        <p>
            <label for="city">
                City:
            </label>
            <input id="city" name="city" type="text" placeholder="Enter City" required/>
        </p>
        <p>
            <label for="state">
                State:
            </label>
            <input id="state" name="state" type="text" placeholder="Enter State" required/>
        </p>
        <p>
            <label for="zipcode">
                Zip Code:
            </label>
            <input id="zip" name="zip" type="text" placeholder="Enter Zip Code" required/>
        </p>
        <p>
            <label for="creditcard">
                Credit Card Number:
            </label>
            <input id="creditcard" name="creditcard" type="text" placeholder="Enter Credit Card Number" required/>
        </p>
        <p>
            <label for="date">
                Expiration Date:
            </label>
            <input id="date" name="date" type="month" placeholder="Enter Expiration Date" required/>
        </p>
        <p>
            <label for="email">
                E-mail Address:
            </label>
            <input id="email" name="email" type="email" placeholder="Enter Email Address" required/>
        </p>
        <br/>
    <hr width="80%" />
    <br/>
    <h2>
            Pizza Size
        </h2>
    <form method="POST">
        <p>
            <label for="size">
                What size pizza would you like?
            </label>
            <select id="size" name="size">
                <option value="0">
                    Small
                </option>
                <option value="1">
                    Medium
                </option>
                <option value="2">
                    Large
                </option>
                <option value="3">
                    Extra Large
                </option>
            </select>
        </p>
        <p>
            <button type="submit_answer" name="submit_answer">
                Submit
            </button>
        </p>
    </form>
    <br/>
    </body>
</html>
