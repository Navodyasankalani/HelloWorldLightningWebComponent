import { LightningElement } from 'lwc';

export default class NavBarParentCmp extends LightningElement {
    navList=[
        {
            id:1,
            name:'Dasun',
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            country:"Sri Lanka",
            rating:'800',
            position:'2',
            selected:false,
            
        },
        {
            id:1,
            name:'Wanidu',
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            country:"Sri Lanka",
            rating:'800',
            position:'1',
            selected:true,
            
             
         }
    ]
}