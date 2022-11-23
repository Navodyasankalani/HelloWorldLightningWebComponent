import { LightningElement } from 'lwc';

export default class ModalParentCmp extends LightningElement {
    showModal = false
    showHandler(){
        this.showModal = true
    }
    modalCloseHandler(){
        this.showModal = false

    }
}