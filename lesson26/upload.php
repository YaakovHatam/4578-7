<?php
var_dump($_FILES['f']);
die();
if(!empty($_FILES['f']))
{
  $path = "uploads/";
  $path = $path . basename( $_FILES['f']['name']);
  if(move_uploaded_file($_FILES['f']['tmp_name'], $path)) {
    echo "The file ".  basename( $_FILES['f']['name']). " has been uploaded";
  } else{
      echo "There was an error uploading the file, please try again!";
  }
}
?> 