<?php
$current_password=$_POST['current_password'];
$new_password=$_POST['new_password'];
$retype_new_password= $_POST['retype_new_password'];


if($current_password == ""){
   echo "ERROR!! Please enter username <br>";
   return;
}

if($current_password == $new_password){
    echo "New Password should not be same as the Current Password";
    return;
}

if(!($new_password == $retype_new_password)){
    echo "Retyped Password should be same as the New Password";
    return;
    
}
else{
    echo "Successfully login";
}
?>