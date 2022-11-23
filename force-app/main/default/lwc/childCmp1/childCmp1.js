import { LightningElement, api } from 'lwc';

export default class ChildCmp1 extends LightningElement {
    @api phone
    @api email
    
    callParent(){
        this.dispatchEvent(new CustomEvent ('childmethod',{detail:"parent method is executed"}))
    }
}