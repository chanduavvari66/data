import { LightningElement, track } from 'lwc';
import Feedback from '@salesforce/schema/Feedback__c';
import Name   from '@salesforce/schema/Feedback__c.Name__c';
import Rating   from '@salesforce/schema/Feedback__c.Rating__c';
import Suggestion   from '@salesforce/schema/Feedback__c.Any_Suggestions__c';
export default class RatingPage extends LightningElement {
    objectName = Feedback
    field1 = Name
    field2 = Rating
    field3 = Suggestion
    
    @track openForm = false;
  
    showForm() {  
      this.openForm = true;
    }

    closeForm() {  
      this.openForm = false;
    }

    successHandler(){
      this.template.querySelectorAll('lightning-input-field').forEach(element => { element.reportValidity(); });
      alert('Thank You :)'+'\n'+'Your feedback is saved.')
      this.openForm = false;
      
    }
}