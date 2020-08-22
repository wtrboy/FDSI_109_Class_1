import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  message = "";
  imageUrl = "";


  constructor() {}
  
  onPost(){
    console.log("posting", this.message, this.imageUrl);
  }
}
