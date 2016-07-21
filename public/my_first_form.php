<!--
	Please perform the following steps to create your first form.
	Within the ~/vagrant-lamp/sites/codeup.dev/public/ folder on your Mac, create a file named my_first_form.php.
	Open the file you just created in your favorite editor. Using what you have learned in the previous lessons, add the necessary HTML document structure to the page with a title of: "My First HTML Form".
	Copy and paste the form example in this lesson into the body of your HTML document.
	View the result in your web browser by browsing to: http://codeup.dev/my_first_form.php
	Place the following at the top of your php file.
	?php
	var_dump($_GET);
	var_dump($_POST);
	?>
	Experiment with using the GET and POST methods by submitting the form and viewing the results in your browser.
	Try deleting the name attributes from the inputs and then submit the form. View the results in your browser. What do you observe? Repeat with the id attributes. What do you observe?
-->
<?php var_dump($_GET); var_dump($_POST);?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <style>
        body {
            background-color: antiquewhite;

        }
        input[type="text"] {
            width: 175px;
            height: 15px;
            box-sizing: border-box;
            border: 1px solid black;
            font-size: 12px;
            padding: 12px 20px 12px 20px;
            -webkit-transition: width 0.4s ease-in-out;
            transition: width 0.4s ease-in-out;
        }
        input[type=password] {
            width: 175px;
            height: 15px;
            box-sizing: border-box;
            border: 1px solid black;
            font-size: 12px;
            padding: 12px 20px 12px 20px;
            -webkit-transition: width 0.4s ease-in-out;
            transition: width 0.4s ease-in-out;
        }
        input[type=text]: focus {
            width: 25%;
        }
        input[type=password]: focus {
            width: 25%;
        }
        button {
            background-color: #34495e;
            border-radius: 6px;
            color: white;
            padding: 6px 14px;
            text-decoration: none;
            margin: 2px 2px;
            cursor: pointer;
        }
    </style>
    <title>
        My First Form
    </title>
</head>

<body>
    <h1 align="center">
			My First Form Exercise
		</h1>
    <br/>
    <br/>
    <!-- username and password form -->
    <h3>
			User Login
		</h3>
    <form method="POST" action="/my_first_form.php">
        <p>
            <label for="username">
                Username
            </label>
            <input id="username" name="username" type="text" placeholder="Enter your username" />
        </p>
        <p>
            <label for="password">
                Password
            </label>
            <input id="password" name="password" type="password" placeholder="Enter your password" />
        </p>
        <p>
            <button type="submit" />Login
            </button>
    </form>
    <!-- break between forms -->
    <br/>
    <hr width="80%" />
    <!-- Search DUCK DUCK GO FORM -->
    <form method="GET" action="http://duckduckgo.com/?">
        <p>
            <h3>
						<label for "search">
							Search DuckDuckGo
						</label>
					</h3>
        </p>
        <input name="q" type="text" />
        <button type="submit" />Submit Search
        </button>
    </form>
    <br/>
    <hr width="80%" />
    <!-- Third Form on Page -->
    <br/>
    <h3>
				Compose An Email
			</h3>
    <form>
        <p>
            <label for="to">
                To:
            </label>
            <input type="text" id="to" name="to" placeholder="Enter recipient email" />
        </p>
        <p>
            <label for="from">
                From:
            </label>
            <input type="text" id="from" name="from" placeholder="Enter your email" />
        </p>
        <p>
            <label for="subject">
                Subject:
            </label>
            <input type="text" id="subject" name="subject" placeholder="Enter Subject" />
        </p>
        <p>
            <textarea id="email_body" name="email_body" rows="5" cols="40">
            </textarea>
        </p>
        <p>
            <input type="checkbox" id="sent_folder" name="sent_folder" value="yes" checked/>
            <label for="sent_folder">
                Would you like to save a copy of this email to your Sent Folder?
            </label>
        </p>
        <p>
            <button type="send" name="send">
                Send
            </button>
        </p>
    </form>
    <br/>
    <hr width="80%" />
    <br/>
    <h4>
				<a href="https://www.reddit.com/search?q=javascript&restrict_sr=&sort=top&t=all">
					Seach Reddit for JavaScript Sorted by Top Results
				</a>
			</h4>
    </p>
    <form method="get" action="http://reddit.com/search?">
        <p>
            <label for "search">
                Search Reddit and Sort by Top
            </label>
        </p>
        <p>
            <input name="q" type="text" />
            <input name="sort" type="hidden" value="top" />
            <button type="submit" />Submit Search
            </button>
        </p>
    </form>
    <br/>
    <hr width="80%" />
    <br/>
    <h2>
			Multiple Choice Test
		</h2>
    <form method="POST">
        <p>
            What color is Codeup's Logo?
        </p>
        <label>
            <input type="radio" name="q1" value="red" />Red
        </label>
        <label>
            <input type="radio" name="q1" value="yellow" />Yellow
        </label>
        <label>
            <input type="radio" name="q1" value="green" />Green
        </label>
        <label>
            <input type="radio" name="q1" value="purple" />Purple
        </label>
        <br/>
        <br/>
        <p>
            What language is not taught at Codeup?
        </p>
        <label>
            <input type="radio" name="q2" value="PHP" />PHP
        </label>
        <label>
            <input type="radio" name="q2" value="CSS" />CSS
        </label>
        <label>
            <input type="radio" name="q2" value="Java" />Java
        </label>
        <label>
            <input type="radio" name="q2" value="JavaScript" />JavaScript
        </label>
        <br/>
        <br/>
        <p>
            Which cities have you visited?
        </p>
        <label>
            <input type="checkbox" id="chicago" name="city[]" value="Chicago" />Chicago
        </label>
        <label>
            <input type="checkbox" id="denver" name="city[]" value="Denver" />Denver
        </label>
        <label>
            <input type="checkbox" id="sandiego" name="city[]" value="San Diego" />San Diego
        </label>
        <br/>
        <label>
            <input type="checkbox" id="boston" name="city[]" value="Boston" />Boston
        </label>
        <label>
            <input type="checkbox" id="miami" name="city[]" value="Miami" />Miami
        </label>
        <label>
            <input type="checkbox" id="philadelphia" name="city[]" value="Philadelphia" />Philadelphia
        </label>
        <br/>
        <label>
            <input type="checkbox" id="phoenix" name="city[]" value="Phoenix" />Phoenix
        </label>
        <label>
            <input type="checkbox" id="detroit" name="city[]" value="Detroit" />Detroit
        </label>
        <label>
            <input type="checkbox" id="seattle" name="city[]" value="Seattle" />Seattle
        </label>
        <br/>
        <br/>
        <p>
            <label for="os">
                What operating systems have you used?
            </label>
            <br/>
            <select id="os" name="os[]" multiple>
                <option value="linux">
                    Linux
                </option>
                <option value="osx">
                    OS X
                </option>
                <option value="windows">
                    Windows
                </option>
                <option value="unix">
                    Unix
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
    <hr width="80%" />
    <h2>
			Select Testing
		</h2>
    <form method="POST">
        <p>
            <label for="ski">
                Do you know how to snow ski?
            </label>
            <select id="ski" name="ski">
                <option value="1">
                    Yes
                </option>
                <option value="0" selected>
                    No
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
