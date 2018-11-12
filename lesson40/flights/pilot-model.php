<?php
    class PilotModel {
        private $pilot_id;
        private $pilot_name;

        function __construct($pilotRow) {
            $this->pilot_id = $pilotRow['pilot_id'];
            $this->pilot_name = $pilotRow['pilot_name'];
        }

        function getPilotId() {
            return $this->pilot_id;
        }

        function getPilotName() {
            return $this->pilot_name;
        }
    }
