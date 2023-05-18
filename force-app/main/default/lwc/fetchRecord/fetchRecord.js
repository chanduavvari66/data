import { LightningElement,api } from 'lwc';

export default class FetchRecord extends LightningElement {
    @api recordId
    @api objectApiName
}