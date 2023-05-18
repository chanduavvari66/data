import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
    message = 'World';

    changemessage(event){
    this.message = event.target.value;
    }

}