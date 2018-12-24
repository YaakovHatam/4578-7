<?php

    $city = $_GET['city'];
    header("Access-Control-Allow-Origin: *");

    //URL of targeted site  
    $url = 'https://jobs.github.com/positions.json?description=python&location='.$city;
    
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

    echo $output;
?>