<?php
    session_start();
    // session_destroy();
    require_once 'user-model.php';
    require_once 'user-business-logic.php';

    if (!empty($_POST['email']) && !empty($_POST['password'])) {
        
        $u = new UserModel([
            'email' => $_POST['email'],
            'password' => $_POST['password']
        ]);

        $ubl = new UserBusinessLogic;


        $res = $ubl->getOne($u);
        $logged = !empty($res['id']);

    
         if ($logged) {
             $_SESSION['id'] = $res['id'];
            header("Location: logged.php"); /* Redirect browser */
            exit();
        } else {
            $error = 'Problem with login';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User login</title>
</head>
<body>
    <!-- TODO: Add bootstrap -->
    <form action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST'>
        <label>Email:<input type='email' name='email' value='test@test.com'></label>
        <label>Password:<input type='password' name='password' value='12345'></label>
        <button>Login</button>
    </form>
    <div>
        <?php echo !empty($error) ? $error : "" ?>
    </div>
</body>
</html>
