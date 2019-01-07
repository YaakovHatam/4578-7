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

        function post($params) {
            
        }
    }

    $ctrl = new FlightApiController;
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'get': 
            $ctrl->get();
            break;
        case 'post':
            $ctrl->post($_POST);
    }


?>