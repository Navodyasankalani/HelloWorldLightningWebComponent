import { LightningElement } from 'lwc';

export default class TemplateTrue extends LightningElement {
    showText = false;

    handleHideText(event){
        this.showText= true;
        //this.showTest= event.target.value;
    }
}