<?php
    class ReportsHtmlHelper {
        
        function pilotFlightCountHtml($array) {
            $html = '<table class="table table-striped">';
            $html .= '<thead><tr><td>' . 'pilot' . '</td><td>' . 'no. flights'. '</td></tr></thead>';
            for($i=0; $i < count($array); $i++) {
                $html .= '<tr>';
                $html .= '<td>' . $array[$i]['pilot_name'] . '</td>';
                $html .= '<td>' . $array[$i]['num_of_flights'] . '</td>';
                $html .= '</tr>';
            }
            $html .= '</table>';

            return $html;
        }
    }

?>