import { LightningElement } from 'lwc';
import age from '@salesforce/resourceUrl/Age_Image';
import bmi from '@salesforce/resourceUrl/Bmi_Image';
import survey from '@salesforce/resourceUrl/Survey_Image';
import currency from '@salesforce/resourceUrl/converter';
export default class ProjectsResume extends LightningElement {
    AgeImage = age
    BmiImage = bmi
    SurveyImage = survey
    CurrencyImage = currency

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
}