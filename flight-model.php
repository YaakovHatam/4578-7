<?php  
    class FlightModel {
        private $flight_id;
        private $flight_from;
        private $flight_to;
        private $flight_datetime;
        private $flight_special_comments;
        private $pilot_id;

        function __construct($arr) {
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
    }

?>