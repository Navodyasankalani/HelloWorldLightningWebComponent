import { LightningElement } from 'lwc';

export default class GetterFuction extends LightningElement {
    title='This is the getter power';
    selectedBtn = 'OFF'

    get getTitle(){
        return this.title.toUpperCase()
    }

    get boxStatus(){
        return `box ${this.selectedBtn === 'ON' ? 'green' : 'red'}`
        //return this.selectedBtn === 'ON' ? 'green' : ' red'
    }
    clickHandler(event){
        console.log(event.currentTarget.innerText)
        this.selectedBtn = event.currentTarget.innerText;
    }
}