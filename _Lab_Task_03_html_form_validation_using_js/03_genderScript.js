function validateGender() {

    let male = document.getElementById("male").value;
    let female = document.getElementById("female").value;
    let other = document.getElementById("other").value;

    if(male == false && female == false && other == false){
        alert("Invalid! Please select at least one gender.");
    }
    else{
        alert("Success! Gender selected.");
    }

}