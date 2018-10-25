<?php
    require_once './bl.php';
    // require_once './flight-model.php';

    class BusinessLogicPilots extends BusinessLogic {
        public function get()
        {
            $q = 'SELECT * FROM `flights`';
    
            $results = $this->dal->select($q);
            $resultsArray = [];
    
            while ($row = $results->fetch()) {
                array_push($resultsArray, new FlightModel($row));
            }
    
            return $resultsArray;
        }
    }