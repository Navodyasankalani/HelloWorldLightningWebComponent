import { LightningElement } from 'lwc';

export default class TemplateToggle extends LightningElement {

    toggleText = true;

    toggleHandler(){
        this.toggleText = !this.toggleText;
    }
}