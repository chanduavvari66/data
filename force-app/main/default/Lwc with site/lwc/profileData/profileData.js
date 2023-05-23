import { LightningElement,wire,api } from 'lwc';
import user_image from '@salesforce/resourceUrl/User';
import linkedin_image from '@salesforce/resourceUrl/linkedin';
import git_image from '@salesforce/resourceUrl/git';
import trailhead_image from '@salesforce/resourceUrl/trailhead';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import fullname from '@salesforce/schema/Resume__c.Full_Name__c';
import phone from '@salesforce/schema/Resume__c.Phone__c';
import mail from '@salesforce/schema/Resume__c.Email__c';
import location from '@salesforce/schema/Resume__c.Location__c';
import pincode from '@salesforce/schema/Resume__c.pincode__c';
import designation from '@salesforce/schema/Resume__c.Designation__c';
import company from '@salesforce/schema/Resume__c.Company_Name__c';
export default class ProfileData extends LightningElement {
    image = user_image;
    linkedin = linkedin_image;
    github = git_image;
    trailhead = trailhead_image;

    /*********Giving data from code **********************
    linkedinUrl = 'https://www.linkedin.com/in/avvari-chandu-500673179'
    githubUrl = 'https://github.com/chanduavvari66/data'
    trailheadUrl = 'https://trailblazer.me/id/avvarichandu'
    recordId = 'a035g00000DWL1MAAX'***********************/

    @api recordId
    @api linkedinUrl
    @api githubUrl
    @api trailheadUrl

    @wire(getRecord, {recordId:'$recordId', fields:[fullname,phone,mail,location,pincode,designation,company]})
    resumeData

    get name(){
        return getFieldValue(this.resumeData.data, fullname)
    }
    get mobile(){
        return getFieldValue(this.resumeData.data, phone)
    } 
    get email(){
        return getFieldValue(this.resumeData.data, mail)
    }
    get address(){
        return getFieldValue(this.resumeData.data, location)
    }
    get code(){
        return getFieldValue(this.resumeData.data, pincode)
    }
    get job(){
        return getFieldValue(this.resumeData.data, designation)
    }
    get companyname(){
        return getFieldValue(this.resumeData.data, company)
    }

    resumeDownload(){
        window.open("https://github.com/chanduavvari66/resume/raw/main/Avvari%20Chandu.pdf","_blank")
    }
}