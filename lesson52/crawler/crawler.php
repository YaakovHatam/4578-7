<?php
    $linksToVisit = [];
    $visitedLinks = [];

    main('https://www.start.co.il/');

    function main($url) {
        $s = getUrlSource($url);
        array_push($GLOBALS['visitedLinks'], $url);

        $links = getLinksFromSource($s);

        array_push($GLOBALS['linksToVisit'], $links);

        echo print_r($links);
        // main(array_pop($linksToVisit));

    }

    function getUrlSource($url) {
        $ch = curl_init();  

        // set URL and other appropriate options  
        curl_setopt($ch, CURLOPT_URL, $url);  
        curl_setopt($ch, CURLOPT_HEADER, 0);  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  

        // grab URL and pass it to the browser  

        $output = curl_exec($ch);  

        //echo $output;

        // close curl resource, and free up system resources  
        curl_close($ch);  

        return $output;
    }

    function getLinksFromSource($source) {
        preg_match_all('/<a(.*) href="(.*)"(.*)>(.*)<\/a>/', $source, $matches);
        return $matches;
    }

?>