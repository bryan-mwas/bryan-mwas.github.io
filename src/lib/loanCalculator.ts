type EMIParams = {
  principal: number;
  rate: number;
  years: number;
  customInstallment?: number;
};

export class LoanAmortizationSchedule {
  principal: number;
  r: number;
  numPeriods: number;
  customInstallments?: number;
  months_taken: number;
  total_interest: number;

  constructor({ principal, rate, years, customInstallment }: EMIParams) {
    this.principal = principal;
    this.r = (rate / 12) * 0.01;
    this.numPeriods = years * 12;
    this.customInstallments = customInstallment;
    this.months_taken = 0;
    this.total_interest = 0;
  }

  getEquatedMonthlyInstallments() {
    const num = this.principal * this.r * Math.pow(1 + this.r, this.numPeriods);
    const denom = Math.pow(1 + this.r, this.numPeriods) - 1;

    return num / denom;
  }

  getArmotizationSchedule() {
    let month = 1;
    let emi = this.customInstallments || this.getEquatedMonthlyInstallments();
    let opening_balance = this.principal;
    const table = [];

    const EPS = 1e-8; // stop when balance is surely zero
    const start_date = new Date();
    let total_interest_paid = 0;

    // TODO: Handle case of overpayment of emi. Extra goes towards principal
    // Compare the savings

    while (opening_balance > EPS) {
      const interest = opening_balance * this.r;
      let paid_principal = emi - interest;

      // Validation
      if (this.principal <= 0)
        throw new Error("Principal must be greater than 0");
      if (this.r <= 0) throw new Error("Rate cannot be negative");
      if (this.numPeriods <= 0) throw new Error("Years must be greater than 0");
      if (
        this.customInstallments !== undefined &&
        this.customInstallments <= 0
      ) {
        throw new Error("Custom installment must be greater than 0");
      }

      // check against small input
      if (paid_principal < 0) {
        throw new Error(
          "The custom monthly installment is too small. Doesn't cover interest",
        );
      }

      // protect against final overpayment
      if (paid_principal > opening_balance) {
        start_date.setMonth(start_date.getMonth() + this.months_taken);
        console.log("Completion will be at month: ", start_date.toUTCString());
        this.total_interest = total_interest_paid;
        this.months_taken = month;
        paid_principal = opening_balance;
        emi = interest + paid_principal;
      }
      const closing_balance = opening_balance - paid_principal;
      total_interest_paid += interest;

      table.push({
        month: month,
        opening_balance,
        emi,
        interest: parseFloat(interest.toFixed(2)),
        paidPrincipal: parseFloat(paid_principal.toFixed(2)),
        closingBalance: parseFloat(closing_balance.toFixed(2)),
        totalPaidInterest: total_interest_paid,
      });
      // advance loop by updating opening_balance
      opening_balance = closing_balance;
      month++;
    }
    this.months_taken = month - 1;
    this.total_interest = total_interest_paid;
    return table;
  }

  getCompletionDate() {
    const start_date = new Date();
    start_date.setMonth(start_date.getMonth() + this.months_taken);
    return start_date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}
