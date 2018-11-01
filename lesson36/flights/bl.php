<?php
require_once './dal.php';

abstract class BusinessLogic
{
    protected $dal;

    public function __construct()
    {
        $this->dal = DataAccessLayer::Instance();
    }

    abstract function get();
    // abstract function insert($params);
}
