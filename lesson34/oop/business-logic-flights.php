<?php
    require_once 'bl.php';
    require_once "./flight-model.php";

    class BusinessLogicFlights extends BusinessLogic {

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

        public function set($f) {
            $query = "INSERT INTO flights (`flight_from`, `flight_to`, `flight_datetime`, `flight_special_comments`,
            `pilot_id`) VALUES (:a, :b, :c, :d, :e)";

            $params = array(
                "a" => $f->getFlightFrom(),
                "b" => $f->getFlightTo(),
                "c" => $f->getFlightDateTime(),
                "d" => $f->getFlightSpecialComments(),
                "e" => $f->getFlightPilot(),
            );

            $this->dal->insert($query, $params);
        }
    }