import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    number1='';
    number2='';
    result=0;
    displayOutput=false;
    //First method to access values
    // handleClick(event) {
    //     this.number1=event.target.value;
    //     console.log(this.number1);
    // }
    // checkHandle(event) {
    //     this.number2=event.target.value;
    //     console.log(this.number2);
    // }
    //Second method to access values    
    // handleClick(event){
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     if(name==="number1"){
    //         this.number1=value;
    //     }
    //     else if(name==="number2"){
    //         this.number2=value;
    //     }
    // }
    handleClick(event){
             let {name, value}=event.target;
             if(name==="number1"){
                 this.number1=value;
                 console.log(this.number1);
             }
             else if(name==="number2"){
                 this.number2=value;
                 console.log(this.number1);
             }
         }
         calculateInput(event){
            this.displayOutput=true;
            let label = event.target.label;
            if(label==="Additon"){
                 this.result = parseInt(this.number1)+parseInt(this.number2);
            }else if(label==="Substraction"){
                this.result = parseInt(this.number1)-parseInt(this.number2);
            }else if(label==="Multiplication"){
                this.result = parseInt(this.number1)*parseInt(this.number2);
            }else if(label==="Division"){
                this.result = parseInt(this.number1)/parseInt(this.number2);
            }
            //reset
            this.number1='';
             this.number2='';
         }
    // Division(event){
    //     this.result = parseInt(this.number1)/parseInt(this.number2);
    // }
    // Multiplication(event){
    //     this.result = parseInt(this.number1)*parseInt(this.number2);
    // }
    // Substraction(event){
    //     this.result = parseInt(this.number1)-parseInt(this.number2);
    // }
    // Additon(event){
    //     this.result = parseInt(this.number1)+parseInt(this.number2);
    // }
}