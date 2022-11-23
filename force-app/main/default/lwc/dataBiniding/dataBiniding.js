import { LightningElement,track } from 'lwc';

export default class DataBiniding extends LightningElement {
    name = "Navodya"

    @track title ="Salesforce developer"

    changeHandler(event){
        this.title=event.target.value;
        console.log('Title : ', this.title);
    }
}