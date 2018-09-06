<?php
    class Movie {
        private $name;
        private $rating;
        private $length;

        function __construct($name, $rating, $length) {
            $this->name = $name;
            $this->rating = $rating;
            $this->length = $length;
        }

        public function getName() {
            return $this->name;
        }

        public function getRating() {
            return $this->rating.' stars';
        }

    }

?>