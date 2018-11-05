<?php
    class UserModel {
        private $id;
        private $email;
        private $password;

        function __construct($paramsArray) {
            if (!empty($paramsArray['id'])) {
                $this->id = $paramsArray['id'];
            }
            $this->email = $paramsArray['email'];
            $this->password = MD5($paramsArray['password']);
        }

        function getId() {
            return $this->id;
        }

        function setId($id) {
            $this->id = $id;
        }

        function getEmail() {
            return $this->email;
        }

        function setEmail($email) {
            $this->email = $email;
        }

        function getPassword() {
            return $this->password;
        }

        function setPassword($password) {
            $this->password = $password;
        }
    }

?>