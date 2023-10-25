function calculateLoan(loanAmount, annualInterestRatePercent, years) {
  const annualInterestRate = annualInterestRatePercent / 100;
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = years * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterestPaid = totalPaid - loanAmount;

  displayResult(
    loanAmount,
    annualInterestRatePercent,
    years,
    monthlyPayment,
    totalInterestPaid,
    totalPaid
  );
}
function displayResult(
  loanAmount,
  annualInterestRatePercent,
  years,
  monthlyPayment,
  totalInterestPaid,
  totalPaid
) {
  console.log("Loan Amount:         $" + loanAmount);
  console.log("Interest Rate:       " + annualInterestRatePercent + " %");
  console.log("Loan Length:         " + years + " years");
  console.log("Monthly Payment:     $" + monthlyPayment);
  console.log("Total Interest Paid: $" + totalInterestPaid.toFixed(2));
  console.log("Total Paid:          $" + totalPaid.toFixed(2));

  console.log("\n");
}

// Loan option 1
calculateLoan(53000, 7.625, 15);

// Loan option 2
calculateLoan(100000, 7.835, 30);
