import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    @track weight='';
    @track height='';
    result;
    bmiValue;
    clicked=false;
    @track bmi;

    onweightChange(event){
        this.weight=parseFloat(event.target.value);
    }

    onheightChange(event){
        this.height=parseFloat(event.target.value);
    }

    calculateBMI(){
        this.bmiValue=this.weight/((this.height/100)*(this.height/100));
        this.bmi= this.bmiValue.toFixed(2); //changing bmi values with only two decimal value

        //Result based on bmi
        if(this.bmi <18.5){
            this.result = 'Underweight'
          } else if(this.bmi >=18.5 && this.bmi <25){
            this.result = 'Healthy'
          } else if(this.bmi >=25 && this.bmi <30){
            this.result = 'Overweight'
          } else if(this.bmi > 30){
            this.result = 'Obese'
          }
          else{
            this.result='NaN'
          }

          this.clicked=true
    }
    back(){ // for ok button and resets values to empty 
        this.clicked=false;
        this.weight = '';
        this.height = '';
    }
    
    resetInputs(){ // reset method for refresh icon by assign empty values
      this.weight = '';
      this.height = '';
    }

   /* resetInputs() { //reset method for refresh icon using query selector
      const weightInput = this.template.querySelector('.weight-input');
      const heightInput = this.template.querySelector('.height-input');
      weightInput.value = '';
      heightInput.value = '';
      this.weight = '';
      this.height = '';
  }
  // mention below class in html for labels
  class="weight-input"
  class="height-input"
  */
}