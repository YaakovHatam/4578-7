<?php
    require_once './bl.php';
  require_once 'pilot-model.php';
    require_once 'business-logic-flights.php';

    class BusinessLogicPilots extends BusinessLogic {
        public function get()
        {
            $q = 'SELECT * FROM `pilots`';
    
            $results = $this->dal->select($q);
            $resultsArray = [];
    
            $flightsBl = new BusinessLogicFlights;
            while ($row = $results->fetch()) {

                array_push($resultsArray, new PilotModel($row, $flightsBl->getFlightsByPilot($row['pilot_id'])));
            }
            return $resultsArray;
        }

        public function getOne($id)
        {
            $q = 'SELECT * FROM `pilots` WHERE pilot_id= :pid';
            
            $results = $this->dal->select($q, [
                'pid' => $id
            ]);
            $row = $results->fetch();
            return new PilotModel($row);
        }

    }