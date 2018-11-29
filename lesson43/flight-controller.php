<?php
    require_once 'controller.php';
    require_once 'business-logic-flights.php';
    require_once 'business-logic-pilots.php';

    class FlightController extends Controller {
        private $bl;

        function __construct() {
            $this->bl = new BusinessLogicFlights;
        }

        function actionView() {
            $data = $this->bl->get();
            return $data;
        }

        function actionInsert($flight) {
            return $this->bl->set($flight);
        }
    }
?>