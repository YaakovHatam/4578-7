<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
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
    

    $stmt = $pdo->query('SELECT * FROM `flights`');
    ?>
    <table>
        <thead>
            <tr>
                <th>flight_id</th>
                <th>flight_from</th>
                <th>flight_to</th>
                <th>flight_datetime</th>
                <th>flight_special_comments</th>
                <th>pilot_id</th>
            </tr>
        </thead>
        <tbody>
    <?php
    while ($row = $stmt->fetch())
    {
        ?>

        <tr>
            <td><?php echo $row['flight_id'] ?></td>
            <td><?php echo $row['flight_from'] ?></td>
            <td><?php echo $row['flight_to'] ?></td>
            <td><?php echo $row['flight_datetime'] ?></td>
            <td><?php echo $row['flight_special_comments'] ?></td>
            <td><?php echo $row['pilot_id'] ?></td>
        </tr>

    <?php
    }
    ?>
    </tbody>
</table>
</body>
</html>

