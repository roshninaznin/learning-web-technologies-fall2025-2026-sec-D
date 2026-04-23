<?php

$file = $_FILES['profile_pic'];

if($file['name'] == ""){
    echo "Select a file!";
    return;
}

$file_name = $file['name'];
$parts = explode(".", $file_name);
$ext = strtolower(end($parts));


if($ext != "jpg" && $ext != "jpeg" && $ext != "png"){
    echo "Only jpg, jpeg, png allowed!";
    return;
}

if($file['size'] > 4*1024*1024){
    echo "Max size is 4MB!";
    return;
}

echo "File is valid!";
?>