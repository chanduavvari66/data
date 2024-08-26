import { LightningElement, track } from 'lwc';
export default class AgeCalculator extends LightningElement {
    @track startDate;
    @track endDate;
    @track dateDifference;

    connectedCallback() {
        this.endDate = this.getCurrentDate();
    }

    getCurrentDate() {
        const today = new Date();
        let month = '' + (today.getMonth() + 1);
        let day = '' + today.getDate();
        const year = today.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    }

    handleStartDateChange(event) {
        this.startDate = event.target.value;
        this.calculateDateDifference();
    }

    calculateDateDifference() {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);

        const diff = Math.abs(end - start);
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const totalDays = Math.floor(diff / millisecondsPerDay);

        const years = Math.floor(totalDays / 365);
        const months = Math.floor((totalDays % 365) / 30);
        const days = Math.floor((totalDays % 365) % 30);

        this.dateDifference = {
            years: years,
            months: months,
            days: days
        };
    }
    resetHandler(){
        this.startDate=''
        this.dateDifference=''
    }
}

