<?php
    require_once 'business-logic-pilots.php';

    class PilotController {
        private $bl;

        function __construct() {
            $this->bl = new BusinessLogicPilots;
        }

        function actionView() {
            return $this->bl->get();
        }
    }  

?>