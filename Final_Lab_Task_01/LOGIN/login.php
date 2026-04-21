<?php
$username=$_POST['username'];
$password=$_POST['password'];


$username=strtolower($username);
$username_length=strlen($username);


$password_length=strlen($password);

if($username == ""){
   echo "ERROR!! Please enter username <br>";
   return;
}

//A
for($i=0; $i<$username_length; $i++ ){
if(!(($username[$i]>='a' && $username[$i] <='z') || ($username[$i]>='0' && $username[$i] <='9') ||
     ( $username=='.' || $username=='_' || $username=='-'))){
    echo "ERROR!! username must be in a-z  , A-Z  , 0-9  , .  , - , _";
    return;
}}
   
//B
if($username_length<2){
    echo "ERROR!! Username must be contain at least two character";
    return;
}

//C
if($password_length<8){
        echo "ERROR!! Password must be contain at least Eight character";
        return;
}

//D
for($i=0; $i<$password_length; $i++ ){
if(!($password[$i]=='@' || $password[$i]=='#' || $password[$i]=='$' || $password[$i]=='%')){
    echo " ERROR!! Password must contain at least one of the special character @, #, $, %";
    return;
}}

?>