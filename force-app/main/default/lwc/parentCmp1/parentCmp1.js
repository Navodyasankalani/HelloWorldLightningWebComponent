import { LightningElement } from 'lwc';

export default class ParentCmp1 extends LightningElement {

    phone = "07778339773"
    email = "navo@gmail.com"

    msg;

    showMessage(event){
        this.msg = event.detail;
       // console.log(JSON.stringify(event.detail));
    
        

    }

}