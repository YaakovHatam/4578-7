<?php
    require_once 'flight-controller.php';
    require_once 'business-logic-flights.php';
    require_once 'business-logic-pilots.php';

$ctrl = new FlightController;

// remove next 2 lines business logic and work with controllers
$pbl = new BusinessLogicPilots;
$bl = new BusinessLogicFlights;


// $abl = new BusinessLogicAirport;
$hasErrors = false;
$errors = [];

// check posts
if (!empty($_POST['flightFrom']) && !empty($_POST['flightTo']) && !empty($_POST['flightDateTime'])) {
    
    // validations 
    if ($_POST['flightFrom'] == $_POST['flightTo']) {
        // Cannot fly to same origins
        array_push($errors, "same origins");
        $hasErrors = true;
    }

    if (strlen($_POST['flightComments']) > 500) {
        array_push($errors, "over 500 chars");
        $hasErrors = true;
    }
    // end validations

    // if we got errors do not go to DB
    if (!$hasErrors) {
        $flight = new FlightModel([
            'flight_from' => $_POST['flightFrom'],
            'flight_to' => $_POST['flightTo'],
            'flight_datetime' => $_POST['flightDateTime'],
            'flight_special_comments' => $_POST['flightComments'],
            'pilot_id' => $_POST['flightPilot']
    
        ]);
     
        $id = $ctrl->actionInsert($flight);
        echo '<script>alert("'.$id.'")</script>';
    }
    
  
} else if (!empty($_POST['delete'])) {
    $bl->delete($_POST['deleteid']);
} else if (!empty($_POST['saveupdate'])) {
    $flight = $bl->getOne($_POST['saveupdate']);
    
    $flight->setFlightPilot($_POST['updatepilot']);
    $flight->setFlightSpecialComments($_POST['updatecomments']);
    
    $bl->update($flight);
} 
 
// User want filters
if (!empty($_POST['filter']) && !empty($_POST['filterpilot'])) {
    $arrayOfFlights = $bl->getByPilot($_POST['filterpilot']);
} else {
    $arrayOfFlights = $ctrl->actionView();
}

$arrayOfPilots = $pbl->get();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='node_modules/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet'>
    <script src='node_modules/jquery/dist/jquery.min.js'></script>
    <style>
        .block { min-height: 400px;}
    </style>
</head>
<body>
<header>
</header>
<main class='container'> 
    <h2>All flights</h2>
    <section class='block'>

    <?php if ($hasErrors) { ?>
    <div class="alert alert-danger" role="alert">
    <ul>
        <?php foreach ($errors as $error) { ?>
        <li><strong>Oh snap!</strong> <?php echo $error; ?></li>
        <?php } ?>
    </ul>
    </div>
    <?php } ?>

    <form action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST'>
    
    <table class="table">
    <thead>
        <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>
                <select class="form-control" name='filterpilot'>
                <option value=''>All pilots</option>
            <?php foreach($arrayOfPilots as $pilot) { ?>
                <option value='<?php echo $pilot->getPilotId() ?>'><?php echo $pilot->getPilotName() ?></option>
            <?php } ?>
            </select> 
                </th>
                <th></th>
                <th><button class="btn btn-primary" name='filter' value='filter'>Filter</button></th>
        </tr>
        <tr>
                <th>id</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Pilot</th>
                <th></th>
                <th></th>
        </tr>
    </thead>
    <?php foreach ($arrayOfFlights as $item) {
        if (!empty($_POST['update']) && $_POST['update'] == $item->getFlightId()) { 
    ?>
            <tr>
            <td><?php echo $item->getFlightId() ?></td>
            <td><input value='<?php echo $item->getFlightFrom() ?>' disabled></td>
            <td><input value='<?php echo $item->getFlightTo() ?>' disabled></td>
            <td><input name='updatecomments' value='<?php echo $item->getFlightSpecialComments() ?>'></td>
            <td><input value='<?php echo $item->getFlightPilot() ?>' disabled></td>
            <td>
                <select name='updatepilot'>
                <?php foreach($arrayOfPilots as $pilot) { 
                    if ($pilot->getPilotId() == $item->getFlightPilot()) { ?>
                    <option selected value='<?php echo $pilot->getPilotId() ?>'><?php echo $pilot->getPilotName() ?></option>
                    <?php } else {?>
                    <option value='<?php echo $pilot->getPilotId() ?>'><?php echo $pilot->getPilotName() ?></option>
                <?php } } ?>
                </select>
            </td>
            <td><button value='<?php echo $item->getFlightId() ?>' name='saveupdate' class="btn btn-secondary">Save</button></td>
            </tr>
        <?php } else { ?>
        <tr>
            <td><?php echo $item->getFlightId() ?></td>
            <td><?php echo $item->getFlightFrom() ?></td>
            <td><?php echo $item->getFlightTo() ?></td>
            <td><?php echo $item->getFlightSpecialComments() ?></td>
            <td><?php echo $item->getFlightPilot() ?></td>
            <td><?php echo $item->getPilotModel()->getPilotName() ?></td>
            <td><input data-id='<?php echo $item->getFlightId() ?>' type="submit" value='delete' name='delete' class="btn btn-default"/></td>
            <td><button value='<?php echo $item->getFlightId() ?>' name='update' class="btn btn-secondary">Update</button></td>
        </tr>
    <?php } }?>
    </table>
    <input id='deleteid' type='hidden' name='deleteid' value='' />
    </form>
</main>
<script>
    $(document).ready(function() {
        $('input[name="delete"]').click(function() {
            $('#deleteid').val(this.dataset.id);
        });
    });
</script>
</section>
 <h2>Add new flight</h2>
    <form action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST'>
        <div class="form-group">
            <label for="flightFrom">Flight from</label>
            <input name='flightFrom' class="form-control" id="flightFrom" placeholder="Flight from">
        </div>
        <div class="form-group">
            <label for="flightTo">flightTo</label>
            <input name='flightTo' class="form-control">
        </div>
        <div class="form-group">
            <label for="flightDateTime">flightDateTime</label>
            <input name='flightDateTime' type='date' class="form-control" id="flightDateTime" placeholder="Flight from">
        </div>
        <div class="form-group">
            <label for="flightComments">flightComments</label>
            <input name='flightComments' class="form-control" id="flightComments" placeholder="Flight comments">
        </div>
        <div class="form-group">
            <label for="flightPilot">flightPilot</label>
            <select class="form-control" name='flightPilot'>
            <?php foreach($arrayOfPilots as $pilot) { ?>
                <option value='<?php echo $pilot->getPilotId() ?>'><?php echo $pilot->getPilotName() ?></option>
            <?php } ?>
            </select> 
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form> 
    <hr>
</body>
</html>


