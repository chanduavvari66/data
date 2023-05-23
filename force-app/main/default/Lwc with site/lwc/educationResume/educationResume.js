import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class EducationResume extends LightningElement {
    educationList = []
    @api recordId
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Educations__r',
        fields:['Education__c.Institute_Name__c','Education__c.Course_Name__c','Education__c.Year_of_Pass__c',
        'Education__c.Grade__c','Education__c.Percentage__c' ]
    })
    educationData({data,error}){
        if(data){
            this.education(data)
        }
       else(error)
    }

    education(data){
        this.educationList = [...data.records].reverse().map(item=>{
        let Id = item.id
        const {Institute_Name__c, Course_Name__c, Year_of_Pass__c,Grade__c,Percentage__c} = item.fields

        let InstitutionName = this.getValue(Institute_Name__c)
        let Course = this.getValue(Course_Name__c)
        let PassingYear = this.getValue(Year_of_Pass__c)
        let Grade = this.getValue(Grade__c)
        let Percent = this.getValue(Percentage__c)
        
        return {
            Id, InstitutionName, Course, PassingYear, Grade, Percent
        }
    })}

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}