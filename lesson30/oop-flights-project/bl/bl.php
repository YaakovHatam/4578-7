<?php
require_once './dal.php';

abstract class BusinessLogic
{
    protected $dal;

    public function __construct()
    {
        $this->dal = new DataAccessLayer;
    }

    abstract function get();
    // abstract function insert($params);
}
