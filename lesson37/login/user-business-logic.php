<?php
    require_once 'bl.php';
    class UserBusinessLogic extends BusinessLogic {
        function insert($u) {

        }

        function getOne($u) {
            $q = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
            $params = [
                $u->getEmail(),
                $u->getPassword()
            ];
            $result = $this->dal->select($q, $params);
            $res = $result->fetch();
            return $res;
        }

        function get() {

        }
    }

?>