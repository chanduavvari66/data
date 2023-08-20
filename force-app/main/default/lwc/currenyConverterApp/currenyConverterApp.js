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
    const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`
    try{
      const data = await fetch(API_URL)
      const jsonData = await data.json()
      this.result = (Number(this.amount) * jsonData.result).toFixed(2)
    } catch(error){
      this.error="An error occurred. Please try again..."
    }
  }
  reset(){
    this.clicked=false;
    this.amount=''
  }
}