function validateName() {
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
    alert("Validation Successful!");
}