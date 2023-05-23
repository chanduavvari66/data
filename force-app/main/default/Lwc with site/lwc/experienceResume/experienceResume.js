import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class ExperienceResume extends LightningElement {
    experienceList = []
    @api recordId

    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Experiences__r',
        fields:['Experience__c.Role__c','Experience__c.Company_Name__c','Experience__c.Work_Location__c','Experience__c.Start_Date__c',
        'Experience__c.End_Date__c','Experience__c.Currently_Working__c','Experience__c.Description__c']
    })
    experienceData({data,error}){
        if(data){
            this.experience(data)
        }
       else(error)
    }

    experience(data){
        this.experienceList = [...data.records].reverse().map(item=>{
        let Id = item.id
        const {Role__c, Company_Name__c, Work_Location__c,Start_Date__c,End_Date__c,
            Currently_Working__c,Description__c} = item.fields

        let Role = this.getValue(Role__c)
        let Company = this.getValue(Company_Name__c)
        let Location = this.getValue(Work_Location__c)
        let Start = this.getValue(Start_Date__c)
        let End = this.getValue(End_Date__c)
        let Current = this.getValue(Currently_Working__c)
        let Detail = this.getValue(Description__c)
        
        return {
            Id, Role, Company, Location, Start, End, Current, Detail
        }
    })}

    getValue(data){
        return data && (data.displayValue || data.value)
    }
}