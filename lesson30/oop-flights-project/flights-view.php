<?php
    require_once './bl/business-logic-flights.php';

    $bl = new BusinessLogicFlights;
    $arrayOfFlights = $bl->get();
?>
<table>
<?php foreach ($arrayOfFlights as $item) { ?>
<tr>
<td><?php echo $item->getFlightId() ?></td>
<td><?php echo $item->getFlightFrom() ?></td>
<td><?php echo $item->getFlightTo() ?></td>
</tr>
<?php } ?>
</table>
