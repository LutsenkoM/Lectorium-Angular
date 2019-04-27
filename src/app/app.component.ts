import { Component } from '@angular/core';
import {divTrigger} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [divTrigger]
})
export class AppComponent {
  // clickedDivState = 'start';
  // multiState = 'start';
  // changeDivState() {
  //     this.clickedDivState = 'end';
  //     setTimeout(() => {
  //         this.clickedDivState = 'start';
  //     }, 3000);
  // }
    isVisible = false;
}
