import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: [ './game-control.component.css' ]
})
export class GameControlComponent  {
 name = 'Angular';   count: number = 0;  intervalObj;  @Output('start') randomNum = new EventEmitter();  controller(){} 
  startFun(){    console.log("In startFun");
    
    this.intervalObj = setInterval(() => {
      this.count++;
      this.randomNum.emit(this.count);
    }, 1500);
  }
  stopFun(){
    console.log("In stop fum");
    clearInterval(this.intervalObj);
  }

}
