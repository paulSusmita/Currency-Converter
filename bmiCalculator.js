import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    //create property with empty string
    height = ''
    weight = ''
    bmiValue
    result

inputHandler(event){
    const{name,value}=event.target
    if(name === "height"){
        this.height = value
    }
    if(name === "weight"){
        this.weight = value
    }
}
submitHandler(event){
    event.preventDefault() //stops the browser from refreshing
    console.log("height",this.height)
    console.log("weight",this.weight)
    this.calculate()
}
calculate(){
    let height = Number(this.height) / 100;
    let bmi = Number(this.weight) / (height * height);
    this.bmiValue = Number(bmi.toFixed(2));
    console.log('BMI value is: ', this.bmiValue);
    
    if (this.bmiValue < 18.5) {
        this.result = "Under Weight";
    } else if (this.bmiValue >= 18.5 && this.bmiValue < 25) {
        this.result = "Healthy";
    } else if (this.bmiValue >= 25 && this.bmiValue < 30) {
        this.result = "Over Weight";
    } else {
        this.result = "Obese";
    }

    console.log('result is: ', this.result);
}

reCalculate(){
    this.height = ''
    this.weight = ''
    this.bmiValue = ''
    this.result = ''
}
}