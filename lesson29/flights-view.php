<?php
    require_once 'bl.php';

    $bl = new BusinessLogic;
    $arrayOfFlights = $bl->getFlights();
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
