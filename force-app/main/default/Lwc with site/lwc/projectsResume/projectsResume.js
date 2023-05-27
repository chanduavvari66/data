import { LightningElement } from 'lwc';
import bmi from '@salesforce/resourceUrl/Bmi_Image';
import survey from '@salesforce/resourceUrl/Survey_Image';
import currency from '@salesforce/resourceUrl/converter';
export default class ProjectsResume extends LightningElement {
    BmiImage = bmi
    SurveyImage = survey
    CurrencyImage = currency

    bmiLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/chandusite/bmi-calculator')
    }
    surveyLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/Esurvey')
    }
    currencyLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/chandusite/currency-converter')

    }
}