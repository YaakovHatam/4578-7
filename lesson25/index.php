<?php session_start() ?>
<?php require_once('config.php'); ?>
<?php
    if (!empty($_GET['username']) && !empty($_GET['password'])) {
        if ($_GET['password'] == $password) {
            $_SESSION['user'] = $_GET['username'];
        }
    }
?>
    <?php include_once "header.php"; ?>
   <form action='index.php'>
        <label> User:
            <input name='username'>
        </label>
        <label> Password:
            <input name='password' type='password'>
        </label>
        <button>Send</button>
    </form>

    <div>
        <a href='user_settings.php'>Go to settings</a>
    </div>
</body>
</html>
