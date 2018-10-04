<?php

	$host = '127.0.0.1';
	$db   = 'fares';
	$user = 'root';
	$pass = '';
	$charset = 'utf8';
	$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
	$opt = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES   => false,
	];
	$pdo = new PDO($dsn, $user, $pass, $opt);

	if (isset($_POST['flight_from'])) {
		// get the post data
		$flight_from = $_POST['flight_from'];
		$flight_to = $_POST['flight_to'];
		$flight_datetime= $_POST['flight_datetime'];
		$flight_special_comments= $_POST['flight_special_comments'];
		$pilot_id= $_POST['pilot_id'];

		// send data to sql
		$statement = $pdo->prepare("INSERT INTO flights (`flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`,
		`pilot_id`) VALUES (:ff, :ft, :fd, :fsc, :pi)");
		$statement->execute(array(
			"ff" => $flight_from,
			"ft" => $flight_to,
			"fd" => $flight_datetime,
			"fsc" => $flight_special_comments,
			"pi" => $pilot_id,
		));

		echo 'success!';
	}

?>