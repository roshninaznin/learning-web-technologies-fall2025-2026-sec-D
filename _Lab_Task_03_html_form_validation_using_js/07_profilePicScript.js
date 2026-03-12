function validateProfile(){

    let uid = document.getElementById("uid").value;
    let pic = document.getElementById("pic").value;

    if(uid == ""){
        alert("User ID cannot be empty");
        return false;
    }

    if(uid <= 0 || isNaN(uid)){
        alert("User ID must be a positive number");
        return false;
    }

    if(pic == ""){
        alert("Please select a picture");
        return false;
    }

    alert("Profile submitted successfully");
    return true;

}
