let price = 1000;

let qtyInput = document.getElementById("qty");
let totalInput = document.getElementById("total");
let error = document.getElementById("error");

qtyInput.addEventListener("input", function(){

    let qty = qtyInput.value;

    if(qty < 0){
        error.innerHTML = "Quantity cannot be negative!";
        qtyInput.value = 0;
        totalInput.value = 0;
        return;
    } else {
        error.innerHTML = "";
    }

    let total = price * qty;
    totalInput.value = total;

    if(total > 1000){
        alert("You got a gift coupon!");
    }

});