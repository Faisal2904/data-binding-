import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {GameControlComponent} from './game-control/game-control.component'
import {OddComponent} from './odd/odd.component'
import {EvenComponent} from './even/even.component'
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive'
import {UnlessDirective} from './unless/unless.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,GameControlComponent,OddComponent,EvenComponent,BasicHighlightDirective,UnlessDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
