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

        public function getByPilot($pid)
        {
            $q = 'SELECT * FROM `flights` WHERE pilot_id=?';
            
            $params = array(
                $pid
            );

            $results = $this->dal->select($q, $params);
            $resultsArray = [];
    
            while ($row = $results->fetch()) {
                array_push($resultsArray, new FlightModel($row));
            }
    
            return $resultsArray;
        }

        public function getOne($id)
        {
            $q = 'SELECT * FROM `flights` WHERE flight_id= :fid';
            
            $results = $this->dal->select($q, [
                'fid' => $id
            ]);
            $row = $results->fetch();
            return new FlightModel($row);
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

        public function delete($id) {
            $query = "DELETE FROM flights WHERE flight_id = :a";

            $params = array(
                "a" => $id
            );

            $this->dal->delete($query, $params);
        }

        public function update($f) {
            $query = "UPDATE `flights` SET `flight_special_comments`=?,`pilot_id`=? WHERE `flight_id`=?";

            $params = array(
                $f->getFlightSpecialComments(),
                $f->getFlightPilot(),
                $f->getFlightId()
            );

            $this->dal->update($query, $params);
        }
    }