window.onload = init();

function init(){
    document.getElementById("button").onclick = calculatorMortgage;
}

function calculatorMortgage(){
    // Gather the textbox info
    loanAmount = document.getElementById("loanAmount").value;
    interestRate = +document.getElementById("interestRate").value;
    loanTermYears = +document.getElementById("loanTerm").value;
    // Do the calculations
    loanTermMonthly = loanTermYears * 12;
    monthlyInterestRate = (interestRate / 100) / 12;
    monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonthly));
    totalInterestPaid = (loanTermMonthly * monthlyPayment) - loanAmount;

    // Display the info back into the html
    document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);
    document.getElementById("totalInterest").value = totalInterestPaid.toFixed(2);
}