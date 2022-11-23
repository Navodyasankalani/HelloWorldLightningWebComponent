import { LightningElement } from 'lwc';

export default class TemplateFalse extends LightningElement {
    hideText = false;

    hideShowText(){
        this.hideText=true;
    }
}