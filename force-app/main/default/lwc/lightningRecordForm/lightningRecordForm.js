import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account from '@salesforce/schema/Account';
import Field1 from '@salesforce/schema/Account.Name';
import Field2 from '@salesforce/schema/Account.Phone';
import Field3 from '@salesforce/schema/Account.AnnualRevenue';
export default class LightningRecordForm extends LightningElement {
    objectName = Account
    fieldList = [Field1,Field2,Field3]

    successHandler(){
        const toastEvent = new ShowToastEvent({ 
            title:'Sucess',
            message:'Account Created',
            variant:'success'
        })
        this.dispatchEvent(toastEvent)
    }
}