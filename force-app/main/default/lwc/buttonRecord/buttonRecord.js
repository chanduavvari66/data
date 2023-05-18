import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ButtonRecord extends LightningElement {
    @track isShowBox = false;
  
    showBox() {  
      this.isShowBox = true;
  }

  hideBox() {  
      this.isShowBox = false;
  }
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
  }