<?php
require_once 'business-logic-flights.php';
require_once 'business-logic-pilots.php';

$bl = new BusinessLogicFlights;
$pbl = new BusinessLogicPilots;
// $abl = new BusinessLogicAirport;

if (!empty($_POST['flightFrom']) && !empty($_POST['flightTo']) && !empty($_POST['flightDateTime'])) {
    $flight = new FlightModel([
        'flight_from' =>  $_POST['flightFrom'],
        'flight_to' => $_POST['flightTo'],
        'flight_datetime' => $_POST['flightDateTime'],
        'flight_special_comments' => $_POST['flightComments'],
        'pilot_id' => $_POST['flightPilot']

    ]);
 
    $bl->set($flight);
} else if (!empty($_POST['delete'])) {
    $bl->delete($_POST['deleteid']);
}

$arrayOfFlights = $bl->get();
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
</head>
<body>
<header>
</header>
<main class='container'> 
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
            <input name='flightComments' class="form-control" id="flightComments" placeholder="Flight from">
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
    <h2>All flights</h2>
    <form action='<?php echo basename($_SERVER['PHP_SELF']); ?>' method='POST'>
    <table class="table">
    <?php foreach ($arrayOfFlights as $item) {
        if (!empty($_POST['update']) && $_POST['update'] == $item->getFlightId()) { 
    ?>
            <tr>
            <td><?php echo $item->getFlightId() ?></td>
            <td><input value='<?php echo $item->getFlightFrom() ?>'></td>
            <td><input value='<?php echo $item->getFlightTo() ?>'></td>
            <td><input value='<?php echo $item->getFlightSpecialComments() ?>'></td>
            <td><input value='<?php echo $item->getFlightPilot() ?>'></td>
            <td><input value='<?php echo $item->getPilotModel()->getPilotName() ?>'></td>
            <td><button value='<?php echo $item->getFlightId() ?>' name='save' class="btn btn-secondary">Save</button></td>
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
</body>
</html>

