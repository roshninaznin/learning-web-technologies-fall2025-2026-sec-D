
function validateEmail() {
    let data = document.getElementById("myEmail").value;

    if (data == "") {
        alert("Invalid! Email cannot be empty.");
    } 
    
    else if (data.includes("@") == false) {
        alert("Invalid! You are missing the @ symbol. Please follow the syntax like example: abc@gmail.com");
    } 
    
    else if (data.includes(".") == false) {
        alert("Invalid! You are missing the dot ( . ). Please follow the syntax like example: abc@gmail.com");
    } 
    
    else {
        alert("Success! Valid email address.");
    }
}