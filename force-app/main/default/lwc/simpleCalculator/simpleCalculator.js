import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
     currentResult
     previousResults = [];
     showPreviousResults = false;
    firstNumber;
    secondNumber;
    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResult);
    }

    mulHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentResult);
    }
   /* showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }*/
}
/*firstNumber;
secondNumber;
 fnChange(event){
     this.firstNumber= parseInt(event.target.value)
 }
 snChange(event){
     this.secondNumber= parseInt(event.target.value)
 }
 addHandler(){
     this.currentResult= this.firstNumber+this.secondNumber;
 }
 subHandler(){
    this.currentResult= this.firstNumber - this.secondNumber;
}
multiplyHandler(){
    this.currentResult= this.firstNumber* this.secondNumber;
}
divisionHandler(){
        this.currentResult= this.firstNumber / this.secondNumber;

}
}*/

  

