import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  styleUrls: ['./custom-pipe.component.scss'],
  template:
        `
    <div>
      <h2>{{num}}</h2>
      <h2>{{num | appPow: 3:'='}}</h2>
      <h2>{{num | appPow: 6}}</h2>
      <h2>{{num | appPow}}</h2>
      <h2>{{6 | appPow: 2}}</h2>
    </div>`
})
export class CustomPipeComponent implements OnInit {

  num = 2;

  constructor() { }

  ngOnInit() {
  }

}
