import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('clickedDiv', [
          state('start', style({
              backgroundColor: 'blue',
              width: '200px',
              height: '150px'
          })),
          state('end', style({
              backgroundColor: 'red',
              width: '400px',
              height: '400px'
          })),
          transition('start  => end', animate(1500)),
          transition('end  => start', animate('800ms 0.5s ease-out'))
      ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
      this.clickedDivState = 'end';
      setTimeout(() => {
          this.clickedDivState = 'start';
      }, 3000);
  }
}
