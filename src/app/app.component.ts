import { Component } from '@angular/core';
import {changeWidthTrigger, divTrigger} from "./app.animations";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [divTrigger, changeWidthTrigger]
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

    onAnimationStart(event: AnimationEvent) {
        console.log('Start', event);
    }
    onAnimationDone(event: AnimationEvent) {
        console.log('Done', event);
    }
}
