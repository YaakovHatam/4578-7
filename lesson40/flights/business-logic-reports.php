<?php
require_once './dal.php';

    class BusinessLogicReports {

        protected $dal;

        public function __construct()
        {
            $this->dal = DataAccessLayer::Instance();
        }
        
        public function pilotFlightCount()
        {
            $q = 'SELECT p.pilot_name, count(p.pilot_name) as num_of_flights FROM flights f inner join pilots p on p.pilot_id = f.pilot_id group by p.pilot_name';
            
            $results = $this->dal->select($q);
            
            $retArray = [];
            
            while ($row = $results->fetch()) {
                array_push($retArray, $row);
            }
    
            return $retArray;
        }
    }