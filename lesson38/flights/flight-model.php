<?php  
    require_once './model.php';
    require_once 'business-logic-pilots.php';
    class FlightModel implements IModel {
        private $flight_id;         // auto increment
        private $flight_from;       // FK to Airport
        private $flight_to;         // FK to Airport
        private $flight_datetime;  
        private $flight_special_comments;
        private $pilot_id;           // FK to Pilot
        private $pilotModel;
        
        function __construct($arr) {
            if (!empty($arr['flight_id']))
                $this->flight_id = $arr['flight_id'];
                
            $this->flight_from = $arr['flight_from']; 
            $this->flight_to = $arr['flight_to'];
            $this->flight_datetime = $arr['flight_datetime'];
            $this->flight_special_comments = $arr['flight_special_comments'];
            $this->pilot_id = $arr['pilot_id'];
        }

        function getFlightId() {
            return $this->flight_id;
        }

        function getFlightFrom() {
            return $this->flight_from;
        }

        function getFlightTo() {
            return $this->flight_to;
        }

        function getFlightDateTime() {
            return $this->flight_datetime;
        }

        function getFlightSpecialComments() {
            return $this->flight_special_comments;
        }

        function setFlightSpecialComments($sc) {
            $this->flight_special_comments = $sc;
        }

        function getFlightPilot() {
            return $this->pilot_id;
        }

        function setFlightPilot($p) {
            $this->pilot_id = $p;
        }

        // Lazy load
        function getPilotModel() {
            if (empty($this->pilotModel)) {
                $pbl = new BusinessLogicPilots();
                $this->pilotModel = $pbl->getOne($this->pilot_id);
            }
            return $this->pilotModel;
        }
    }

?>