<?php
    require_once 'flight-controller.php';

    class FlightApiController  {
        private $fctrl;

        function __construct() {
            $this->fctrl = new FlightController;
        }


        function get() {
            $objs = $this->fctrl->actionView();
            echo json_encode($objs, JSON_PRETTY_PRINT);
        }
    }

   echo $_SERVER['REQUEST_METHOD'];


?>