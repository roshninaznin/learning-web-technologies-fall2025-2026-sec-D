function validateBloodGroup(){

    let bg = document.getElementById("blood").value;

    if(bg == ""){
        alert("Please select a blood group");
        return false;
    }

    alert("Blood group selected: " + bg);
    return true;
}