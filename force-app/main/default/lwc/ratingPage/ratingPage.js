import { LightningElement, track,wire,api } from 'lwc';
import Feedback from '@salesforce/schema/Feedback__c';
import Name   from '@salesforce/schema/Feedback__c.Name__c';
import Rating   from '@salesforce/schema/Feedback__c.Rating__c';
import Suggestion   from '@salesforce/schema/Feedback__c.Any_Suggestions__c';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import fullname from '@salesforce/schema/Resume__c.Full_Name__c';
import phone from '@salesforce/schema/Resume__c.Phone__c';
import mail from '@salesforce/schema/Resume__c.Email__c';
import designation from '@salesforce/schema/Resume__c.Designation__c';
import company from '@salesforce/schema/Resume__c.Company_Name__c';
import location from '@salesforce/schema/Resume__c.Location__c';
import pin from '@salesforce/schema/Resume__c.Pincode__c';
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

    @api recordId
    @api objectApiName

    @wire(getRecord, {recordId:'$recordId', fields:[fullname,phone,designation,company,mail,location,pin]})
    resumeData

    get name(){
        return getFieldValue(this.resumeData.data, fullname)
    }
    get phone(){
        return getFieldValue(this.resumeData.data, phone)
    }
    get job(){
        return getFieldValue(this.resumeData.data, designation)
    }
    get companyname(){
        return getFieldValue(this.resumeData.data, company)
    }
    get email(){
        return getFieldValue(this.resumeData.data, mail)
    }
    get address(){
      return getFieldValue(this.resumeData.data, location)
    }
    get code(){
      return getFieldValue(this.resumeData.data, pin)
    }
}