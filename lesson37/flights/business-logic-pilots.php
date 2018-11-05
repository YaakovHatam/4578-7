<?php
    require_once './bl.php';
  require_once 'pilot-model.php';

    class BusinessLogicPilots extends BusinessLogic {
        public function get()
        {
            $q = 'SELECT * FROM `pilots`';
    
            $results = $this->dal->select($q);
            $resultsArray = [];
    
            while ($row = $results->fetch()) {
                array_push($resultsArray, new PilotModel($row));
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