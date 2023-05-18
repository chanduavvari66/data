import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class createRecordForm extends LightningElement {
    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
        const toastEvent = new ShowToastEvent({ 
            title:'Sucess',
            message:'Account Created',
            variant:'success'
        })
        this.dispatchEvent(toastEvent)
        eval("$A.get('e.force:refreshView').fire();");
        }
    handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
    }