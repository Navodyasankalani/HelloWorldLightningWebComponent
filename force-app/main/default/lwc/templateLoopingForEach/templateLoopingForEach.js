import { LightningElement } from 'lwc';

export default class TemplateLoopingForEach extends LightningElement {

    carList=["Toyota", "BMW", "Honda", "Audi"];

    cars = [
        {
          "id": "C001",
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "id": "C002",
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        }
    ]
}