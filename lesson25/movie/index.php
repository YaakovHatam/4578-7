<?php include 'infra.php' ?>
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
        $moviesArr = [];
        array_push($moviesArr, new Movie('movie 1', 5, 90))
    ?>

    <?php
        for($i=0; $i < sizeof($moviesArr); $i++) {
    ?>  
        <div>
            <h2><?php $moviesArr[$i]->getName() ?></h2>
            <p><?php $moviesArr[$i]->getRating() ?></p>
            <strong>{{length}}</strong>
        </div>
    <?php
        }
    ?>
   
</body>
</html>