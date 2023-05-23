import { LightningElement } from 'lwc';
import bmi from '@salesforce/resourceUrl/Bmi_Image';
import survey from '@salesforce/resourceUrl/Survey_Image';
export default class ProjectsResume extends LightningElement {
    BmiImage = bmi
    SurveyImage = survey


    bmiLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/chandusite/bmi-calculator')
    }
    surveyLink(){
        window.open('https://chandu-portfolio-dev-ed.my.site.com/Esurvey')
    }
}