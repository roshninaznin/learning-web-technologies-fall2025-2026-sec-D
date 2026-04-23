<?php

$name = $_POST['name'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$confirm = $_POST['confirm'];
$gender = $_POST['gender'];
$dd = $_POST['dd'];
$mm = $_POST['mm'];
$yyyy = $_POST['yyyy'];


$name_length=strlen($name);
$username_length=strlen($username);



if($name=="" || $email=="" || $username=="" || $password=="" || $confirm==""){
    echo "All fields are required!";
    return;
}


if($name_length) < 2){
    echo "Name must contain at least 2 words!";
    return;
}


if(!str_contains($email, "@") || !str_contains($email, ".")){
    echo "Invalid email!";
    return;
}


if($username_length< 3){
    echo "Username must be at least 3 characters!";
    return;
}


if($password != $confirm){
    echo "Passwords do not match!";
    return;
}


if(!isset($gender)){
    echo "Select gender!";
    return;
}


if($dd=="" || $mm=="" || $yyyy==""){
    echo "Enter date of birth!";
    return;
}

echo "Registration Successful!";

?>