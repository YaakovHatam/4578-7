<?php
    class PilotModel {
        private $pilot_id;
        private $pilot_name;
        private $pilot_flights_array; // from relation table 

        function __construct($pilotRow, $flights = null) {
            $this->pilot_id = $pilotRow['pilot_id'];
            $this->pilot_name = $pilotRow['pilot_name'];

            if (isset($flights)) {
                $this->pilot_flights_array = $flights;
            }
        }

        function getPilotId() {
            return $this->pilot_id;
        }

        function getPilotName() {
            return $this->pilot_name;
        }
    }
