import { LightningElement,api,track } from 'lwc';

export default class DateUpdate extends LightningElement {
    @track D = new Date();
    updateDate(){
        this.D = new Date();
    }

    @api dateData
    dateData = new Date().toDateString();
    
}