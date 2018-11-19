<?php
    class CourseController {
        function actionCreate($cname, $cdesc) {
            // sleep(5);
        
            if (strlen($cname) < 3 || strlen($cdesc) < 3) {
                return 'not valid';
            } else {
                // Business logic
            }
        }
    }

?>