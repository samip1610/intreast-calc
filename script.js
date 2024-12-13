// script.js

function calcInterest() {
    let amount = document.getElementById("amount");
    let year = document.getElementById("year");
    let interest = document.getElementById("interest");
    let res = document.getElementById("res");

    // Check for empty fields and give a warning if any are missing
    if (!amount.value || !year.value || !interest.value) {
        res.innerHTML = "Please fill in all fields.";
        return;
    }

    // Calculate the monthly interest
    let monthly_interest = (parseFloat(amount.value) * (parseFloat(interest.value) / 100)) / (parseFloat(year.value) * 12);

    // Display the result
    res.innerHTML = "Monthly Interest: " + monthly_interest.toFixed(2);
}
