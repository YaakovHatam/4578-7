<?php
    if(!isset($_SESSION)) {
        session_start();
    }
    $isLogged = !empty($_SESSION['uid']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My College!</title>
    <link rel='stylesheet' href='style.css'>
    <script src='jquery.min.js'></script>

</head>
<body>
<header>
    
    <nav>
        <ul>
            <li class='logo'><a href='#'>Logo</a></li>
            <?php if ($isLogged) { ?> <li class='logo'><a href='school.php'>School</a></li> <?php } ?>
            <?php if ($isLogged) { ?> <li class='logo'><a href='index.php?logout=1'>Logout (<?php echo $_SESSION['uid'] ?>)</a></li> <?php } ?>
        </ul>
    </nav>
</header>
<hr>
<main class='container'>