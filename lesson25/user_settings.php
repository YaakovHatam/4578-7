<?php session_start() ?>
<?php include_once "header.php"; ?>
<?php
    if (!empty($_SESSION['user'])) {
        echo 'hello '.$_SESSION['user']." <p>You are in!</p>";
    } else {
?>
    <p>Not allowed</p>
<?php } ?>

 </body>
    </html>

<?php $_SESSION['user'] = null; //logout ?>
