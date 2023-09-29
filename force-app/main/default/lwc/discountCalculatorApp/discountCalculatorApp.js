import { LightningElement, track } from 'lwc';

export default class DiscountCalculatorApp extends LightningElement {

    @track originalPrice = '';
    @track discountPercentage = '';
    @track discountedPrice = '';
    @track discount = false;

    handlePrice(event) {
        this.originalPrice = parseFloat(event.target.value);
    }

    handleDiscountChange(event) {
        this.discountPercentage = parseFloat(event.target.value);
    }

    calculateDiscount() {
        this.discountedPrice = this.originalPrice - (this.originalPrice * (this.discountPercentage / 100));
        this.discount = true;
    }
    resetValues(){
        this.originalPrice = '';
        this.discountPercentage = '';
        this.discount = false;
    }
}
