import { LightningElement} from 'lwc';
import {currenyCountryList} from 'c/currenyCodeList';
import currency from '@salesforce/resourceUrl/converter'
export default class CurrenyConverterApp extends LightningElement {
  image = currency
  optionsCountry = currenyCountryList
  countryFrom = "USD"
  countryTo = "INR"
  amount =''
  result
  error 
  clicked=false;

  handleChange(event){
    this.amount = event.target.value
  }
  handleChangeOne(event){
    const {name, value} = event.target
    this[name] = value
    this.result=''
    this.error =''
    this.countryFrom=event.target.value;
  }
  handleChangeTwo(event){
    const {name, value} = event.target
    this[name] = value
    this.result=''
    this.error =''
    this.countryTo=event.target.value;
  }
  submitHandler(event){
    event.preventDefault()
    this.convert()
    this.clicked=true;
  }
  async convert(){
     const API_KEY = 'f60ac4818919f393b265b8bd'
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
    try{
      const data = await fetch(API_URL)
      const jsonData = await data.json()
      debugger;
      this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
      console.log(this.result)
    } catch(error){
      console.log(error)
      this.error="error. Please try again..."
    }
  }
  reset(){
    this.clicked=false;
    this.amount=''
  }
}
