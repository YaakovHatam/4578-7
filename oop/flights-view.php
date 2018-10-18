<?php
require_once './business-logic-flights.php';

$bl = new BusinessLogicFlights;


if (!empty($_POST['flightFrom']) && !empty($_POST['flightTo']) && !empty($_POST['flightDateTime'])) {
    $flight = new FlightModel([
        'flight_from' =>  $_POST['flightFrom'],
        'flight_to' => $_POST['flightTo'],
        'flight_datetime' => $_POST['flightDateTime'],
        'flight_special_comments' => $_POST['flightComments'],
        'pilot_id' => $_POST['flightPilot']

    ]);
 
    $bl->set($flight);

}

$arrayOfFlights = $bl->get();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='node_modules/bootstrap/dist/css/bootstrap.min.css' rel='stylesheet'>
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
            <select name='flightTo' class="form-control" id="flightTo">
                <option value='1'>Tel Aviv</option>
                <option value='2'>Haifa</option>
            </select>
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
            <input name='flightPilot' class="form-control" id="flightPilot" placeholder="Flight from">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form> 
    <hr>
    <h2>All flights</h2>
    <table class="table">
    <?php foreach ($arrayOfFlights as $item) {?>
        <tr>
            <td><?php echo $item->getFlightId() ?></td>
            <td><?php echo $item->getFlightFrom() ?></td>
            <td><?php echo $item->getFlightTo() ?></td>
            <td><?php echo $item->getFlightSpecialComments() ?></td>
            <td><?php echo $item->getFlightPilot() ?></td>
        </tr>
    <?php }?>
    </table>
    
</main>
</body>
</html>

