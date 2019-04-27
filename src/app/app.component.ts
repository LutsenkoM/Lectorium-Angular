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
          state('active', style({
              backgroundColor: 'orange',
              width: '250px',
              height: '200px'
          })),
          transition('start  <=> end', animate('800ms ease-in')),
          transition('start => active', animate(400)),
          transition('active => end', animate(400))
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
