import { LightningElement,api,wire } from 'lwc';
import age from '@salesforce/resourceUrl/Age_Image';
import bmi from '@salesforce/resourceUrl/Bmi_Image';
import survey from '@salesforce/resourceUrl/Survey_Image';
import currency from '@salesforce/resourceUrl/converter';
import discount from '@salesforce/resourceUrl/Discount_Image';
import emi from '@salesforce/resourceUrl/EMI_Image'		
import html from '@salesforce/resourceUrl/html';
import css from '@salesforce/resourceUrl/css';
import js from '@salesforce/resourceUrl/js';
import bs from '@salesforce/resourceUrl/boot';
import lwc from '@salesforce/resourceUrl/lwc';
import sf from '@salesforce/resourceUrl/salesforce';
import user_image from '@salesforce/resourceUrl/user';
import linkedin_image from '@salesforce/resourceUrl/linkedin';
import git_image from '@salesforce/resourceUrl/git';
import trailhead_image from '@salesforce/resourceUrl/trailhead';
import instagram_image from '@salesforce/resourceUrl/insta';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import fullname from '@salesforce/schema/Resume__c.Full_Name__c';
import Description from '@salesforce/schema/Resume__c.Description__c';
import designation from '@salesforce/schema/Resume__c.Designation__c';
import about from '@salesforce/schema/Resume__c.About__c';
import company from '@salesforce/schema/Resume__c.Company_Name__c';
import software from '@salesforce/schema/Resume__c.Software_and_Tools__c';
export default class TabV2 extends LightningElement {
    @api recordId
    @api objectApiName

    AgeImage = age;
    BmiImage = bmi;
    SurveyImage = survey;
    CurrencyImage = currency;
    DiscountImage = discount;
    EmiImage = emi;
    image = user_image;
    linkedin = linkedin_image;
    github = git_image;
    trailhead = trailhead_image;
    instagram = instagram_image;
    html = html;
    css = css;
    bootstrap = bs;
    js = js;
    salesforce = sf;
    lwc = lwc;
    git = git_image;

    /* We can declare directly in js.
    linkedinUrl = 'https://www.linkedin.com/in/avvari-chandu-500673179';
    githubUrl = 'https://github.com/chanduavvari66/data';
    trailheadUrl = 'https://trailblazer.me/id/avvarichandu';
    instagramUrl = 'https://www.instagram.com/chandu__12__';
    */

    //Declared in community page at target configuraions.
    @api linkedinUrl;
    @api githubUrl;
    @api trailheadUrl;
    @api instagramUrl;


    @wire(getRecord, {recordId:'$recordId', fields:[fullname,Description,designation,company,about,software]})
    resumeData

    get name(){
        return getFieldValue(this.resumeData.data, fullname)
    }
    get desp(){
        return getFieldValue(this.resumeData.data, Description)
    }
    get job(){
        return getFieldValue(this.resumeData.data, designation)
    }
    get companyname(){
        return getFieldValue(this.resumeData.data, company)
    }
    get aboutme(){
        return getFieldValue(this.resumeData.data, about)
    }
    get SoftwareTools(){
        return getFieldValue(this.resumeData.data, software)
    }
   
    ageLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/age-calculator')
    }
    bmiLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/bmi-calculator')
    }
    surveyLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/survey')
    }
    currencyLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/currency-converter')
    }
    discountLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/discount-calculator')
    }
    emiLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/emi-calculator')
    }
    
}