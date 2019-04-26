import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  countArray=[];
  count=0;
  flag=false;
  value=100;

  constructor(){}

  listenNum(event){
    console.log("In listenNum");
    this.countArray.push(event);
  }

  fun(){
    
    if(this.flag==false)
    {
      this.flag=true;
    }
    else{
      this.flag=false;
    }

    console.log("in fun"+this.flag);

  }
}
