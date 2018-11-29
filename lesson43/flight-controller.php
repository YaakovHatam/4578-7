<?php
    require_once 'controller.php';
    require_once 'business-logic-flights.php';
    require_once 'business-logic-pilots.php';

    class FlightController extends Controller {
        function actionView() {
            $bl = new BusinessLogicFlights;
            $data = $bl->get();
            return $data;
        }
    }
?>