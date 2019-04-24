import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  countArray=[];

  constructor(){}

  listenNum(event){
    console.log("In listenNum");
    this.countArray.push(event);
  }
}
