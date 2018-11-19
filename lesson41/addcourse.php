<?php session_start(); ?>
<?php include 'header.php'; ?>
<?php 
    require_once 'coursectrl.php'; 
    $ctrl = new CourseController; 
?>
<?php
    if (!empty($_POST['cname']) && !empty($_POST['cdesc'])) {

        $cname = $_POST['cname'];
        $cdesc = $_POST['cdesc'];
        $ctrl->actionCreate($cname, $cdesc);
        
    }
    
?>

<div style='float: left; width: 20%;'>
    <?php include 'school-sidebar.php' ?>
</div>

<div style='float:left; width:80%;'>
    <form id='addcourse' action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST' novalidate>
        <input name='cname' placeholder='Course name' value='<?php echo !empty($_POST['cname']) ? $_POST['cname'] : '' ?>' required>
        <input name='cdesc' type="text" placeholder="Course description" required>
        <input type="file">
        <button>Save</button>
    </form>
</div>

<script>
    
    var formElement = document.getElementById('addcourse');
    formElement.addEventListener("submit", formSubmitEventCallback, false); 

    function formSubmitEventCallback(e) {
        const inputs = document.querySelectorAll('#addcourse input[required]');
        
        let isValid = true;

        for(let i=0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                isValid = false;
                $(inputs[i]).addClass('error');
            } else {
                $(inputs[i]).removeClass('error');
            }
        }
        if (!isValid) e.preventDefault();
        return isValid;
    }
    
</script>

<?php include 'footer.php' ?>