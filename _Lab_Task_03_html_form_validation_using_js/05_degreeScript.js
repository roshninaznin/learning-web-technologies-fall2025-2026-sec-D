function validateDegree(){

    let degree = document.getElementsByName("abc[]");

    for(let i=0; i<degree.length; i++){
        if(degree[i].checked){
            alert("Success! Degree selected.");
            return;
        }
    }

    alert("Invalid! Please select at least one degree.");

}