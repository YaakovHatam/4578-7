<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php
        $title = 'welcome guest';
        
        if (!empty($_POST['fname'])) {
            $uname = $_POST['fname'];
            $title = 'welcome '.$uname;
        }
        echo '<title>'.$title.'</title>';
    ?>    
</head>
<body>
    <form action='index-post.php' method='POST'>
        <label> Name:
            <input name="fname">
        </label>
        <label>
            email:
                <input name='email'>
        </label>
        <button>Send form</button>
    </form>
</body>
</html>
