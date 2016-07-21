<?php var_dump($_POST) ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Debugging Exercise</title>
</head>
<body>
    <h1>Please Sign Up</h1>
    <form method="POST">
        <label for="username">Username: </label>
        <input id="username" type="text" name="username">
        <br>

        <label for="email">Email: </label>
        <input id="email" type="text" name="email">
        <br>

        <label for="password">Password: </label>
        <input id="password" type="password" name="password">
        <br>

        <label for="confirm_password">Confirm Password: </label>
        <input id="confirm_password" type="password" name="confirm_password">
        <br>

        <h3>Filing Status</h3>

        <label for="">
            <input type="radio" name="filing_status" value="single">
            Single
        </label>
        <br>

        <label for="">
            <input type="radio" name="filing_status" value="married_joint">
            Married Filing Jointly
        </label>
        <br>

        <label for="">
            <input type="radio" name="filing_status" value="married_separate">
            Married Filing Separately
        </label>
        <br>

        <label for="">
            <input type="radio" name="filing_status" value="hoh">
            Head of Household
        </label>
        <br>

        <h3>This past year I was: (check all that apply)</h3>

        <label for="">
            <input type="checkbox" name="self_employed" value="self_employed">
            Self - Employed
        </label>
        <br>

        <label for="">
            <input type="checkbox" name="small_business" value="small_business">
            Employed by a small business (< 50 employees)
        </label>
        <br>

        <label for="">
            <input type="checkbox" name="large_business" value="large_business">
            Employed by a large business (> 50 employees)
        </label>
        <br>

        <h3><label for="phonetype">What kind of phone do you have?</label></h3>

        <select id="phonetype" name="phonetype">
            <option value="1">Android</option>
            <option value="2">iPhone</option>
            <option value="3">Windows Phone</option>
            <option value="4">Other</option>
        </select>

        <hr>

        <label for="newsletter">Sign Me Up For The Newsletter
            <input type="checkbox" name="newsletter" id="newsletter" checked>
        </label>
        <br>
        <br>
        <button type="submit" />Submit
            </button>

    </form>



</body>
</html>
