import { LightningElement, track } from 'lwc';

export default class EmiCalculator extends LightningElement {
    @track principalAmount = '';
    @track interestRate ='';
    @track loanTenureYears = 0;
    @track loanTenureMonths = 0;
    @track emi = '';
    @track totalAmount = '';
    @track totalInterest = '';
    @track emiCalculated = false;

    handlePrincipalChange(event) {
        this.principalAmount = parseFloat(event.target.value);
    }

    handleInterestRateChange(event) {
        this.interestRate = parseFloat(event.target.value);
    }

    handleMonth(event) {
        const inputValue = parseInt(event.target.value, 10);

        if (inputValue >= 0 && inputValue <= 11) {
            this.loanTenureMonths = inputValue;
        } else {
             this.loanTenureMonths = 0;
        }
    }
    handleYear(event) {
        this.loanTenureYears = parseInt(event.target.value, 10);
    }

    calculateEmi() {
        const totalLoanTenureMonths = (this.loanTenureYears * 12) + this.loanTenureMonths;
        const monthlyInterestRate = (this.interestRate / 100) / 12;
        const emi =
            (this.principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalLoanTenureMonths)) /
            (Math.pow(1 + monthlyInterestRate, totalLoanTenureMonths) - 1);
            
        this.emi = emi.toLocaleString('en-IN', { maximumFractionDigits: 2 });

        const totalPayment = emi * totalLoanTenureMonths;
        this.totalInterest = (totalPayment - this.principalAmount).toLocaleString('en-IN', {maximumFractionDigits: 2 });
        this.totalAmount = totalPayment.toLocaleString('en-IN', {maximumFractionDigits: 2 });
        this.emiCalculated = true;   
    }
    resetValues(){
        this.principalAmount = '';
        this.interestRate ='';
        this.loanTenureYears = 0;
        this.loanTenureMonths = 0;
        this.emi = '';
        this.totalInterest = '';
        this.totalAmount = '';
        this.emiCalculated = false;
    }
    
}
