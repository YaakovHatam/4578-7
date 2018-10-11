<?php
    class StaticVariable {
        public static $counter;
        public $name;

        function __construct($name) {
            $this->name = $name;
        
            StaticVariable::$counter++;
            
        }
    }

    $sv1 = new StaticVariable('sv1');
    $sv2 = new StaticVariable('sv2');
    $sv3 = new StaticVariable('sv3');
    $sv4 = new StaticVariable('sv4');

    echo $sv1->name . '<br>';
    echo $sv2->name . '<br>';
    echo $sv3->name . '<br>';
    echo $sv4->name . '<br>';

    echo StaticVariable::$counter;