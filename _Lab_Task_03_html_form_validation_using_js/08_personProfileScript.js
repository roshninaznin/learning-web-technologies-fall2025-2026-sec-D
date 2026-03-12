function validation(){

    //name
    let name = document.getElementById("name").value;

    
    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

   
    let firstChar = name[0].toLowerCase();
    if (!(firstChar >= 'a' && firstChar <= 'z')) {
        alert("Name must start with a letter");
        return;
    }

  
    let words = name.split(" ");
    if (words.length < 2) {
        alert("Name must contain at least two words");
        return;
    }

   for (let i = 0; i < name.length; i++) {
        let char = name[i].toLowerCase();
        
        if (!((char >= 'a' && char <= 'z') || char == '.' || char == '-' || char == ' ')) {
            alert("Only letters, dots, and dashes are allowed");
            return;
        }
    }


    //email
    let data = document.getElementById("myEmail").value;

    if (data == "") {
        alert("Invalid! Email cannot be empty.");
            return;

    } 
    
    else if (data.includes("@") == false) {
        alert("Invalid! You are missing the @ symbol. Please follow the syntax like example: abc@gmail.com");
        return;
    } 
    
    else if (data.includes(".") == false) {
        alert("Invalid! You are missing the dot ( . ). Please follow the syntax like example: abc@gmail.com");
            return;

    } 
   


//gender
     let male = document.getElementById("male").checked;
     let female = document.getElementById("female").checked;
     let other = document.getElementById("other").checked;

     if(!male && !female && !other){
    alert("Please select gender");
    return;
    }



    //dob
    let dob = document.getElementById("dob").value;

        if(dob === "") {
            alert("Date of birth cannot be empty");
            return;
        }

        let parts = dob.split("-"); 
        let yyyy = parseInt(parts[0]);
        let mm = parseInt(parts[1]);
        let dd = parseInt(parts[2]);

        if(dd < 1 || dd > 31) {
            alert("Day must be between 1 and 31");
            return;
        }

        if(mm < 1 || mm > 12) {
            alert("Month must be between 1 and 12");
            return;
        }

        if(yyyy < 1900 || yyyy > 2016) {
            alert("Year must be between 1900 and 2016");
            return;
        }

    


    //blood group
    let bg = document.getElementById("blood").value;

    if(bg == ""){
        alert("Please select a blood group");
        return false;
    }

      //degree
          let degree = document.getElementsByName("abc[]");
          let selected = false;

          for(let i=0; i<degree.length; i++){
           if(degree[i].checked){
            selected = true;
         }
         }

        if(!selected){
         alert(" Please select at least one degree.");
        return;
        }




    //profile pic 
    let pic = document.getElementById("pic").value;


    if(pic == ""){
        alert("Please select a picture");
        return false;
    }

    alert("Fom submitted successfully");
    return true;
} 