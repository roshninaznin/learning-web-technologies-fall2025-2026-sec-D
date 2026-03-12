function validateDOB() {
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

        alert("Valid Date of Birth: " + dd + "/" + mm + "/" + yyyy);
    }