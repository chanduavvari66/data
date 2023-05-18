import { LightningElement, wire } from 'lwc';
import get_Account_List from '@salesforce/apex/GetAccount.getAccountList';
export default class ListApexLwc extends LightningElement {
    accList
    @wire(get_Account_List)
    
    accountListHandler({data,error}){
        if(data){
            this.accList=data
        }
        if(error){
            
        }
    }
}