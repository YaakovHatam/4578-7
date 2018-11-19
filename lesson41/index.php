<?php
    session_start();
    if (!empty($_GET['logout'])) {
        session_destroy();
    }

    else if (!empty($_POST['email']) && !empty($_POST['pass'])) {
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        // from db
        if ( $email == 'a@test.com' && $pass =='1234') {
            $_SESSION['uid'] = 4;
            $_SESSION['role'] = 1;
        }
    }
?>
<?php include 'header.php'; ?>

<form action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST'>
    <input name='email' placeholder='email' value='a@test.com'>
    <input name='pass' type='password' placeholder='password' value='1234'>
    <button>Login</button>
</form>
    
<?php include 'footer.php'; ?>
