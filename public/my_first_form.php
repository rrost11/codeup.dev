<?php var_dump($_GET); var_dump($_POST); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>
			My First Form
		</title>
	</head>
	<body>
		<form method="POST" action="/my_first_form.php">
			<p>
				<label for="username">
					Username
				</label>
				<input id="username" name="username" type="text"/>
			</p>
			<p>
				<label for="password">
					Password
				</label>
				<input id="password" name="password" type="password"/>
			</p>
			<p>
				<input type="submit"/>
			</p>
		</form>
	</body>
</html>
