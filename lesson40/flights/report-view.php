<?php
    require_once 'business-logic-reports.php';
    require_once 'reports-html-helper.php';
    
    $blr = new BusinessLogicReports;
    $rhh = new ReportsHtmlHelper;

    $resultsArray = $blr->pilotFlightCount();
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
    <?php echo $rhh->pilotFlightCountHtml($resultsArray); ?>
</body>
</html>