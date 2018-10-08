<?php
    require_once './dal.php';
    require_once './flight-model.php';

class BusinessLogic {
    private $dal;

    function __construct() {
        $this->dal = new DataAccessLayer;
    }

    function getFlights() {
        $q = 'SELECT * FROM `flights`';

        $results = $this->dal->select($q);
        $resultsArray = [];

        while ($row = $results->fetch()) {
            array_push( $resultsArray, new FlightModel($row));
        }

        return $resultsArray;
    }
}