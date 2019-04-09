import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>{{name}}</h2>
      <h2>{{name | lowercase }}</h2>
      <h2>{{name | uppercase }}</h2>
      <h2>{{name | slice: 3:6 | uppercase }}</h2>
      <hr/>
      <p>{{pi}}</p>
      <p>{{pi | number}}</p>
      <p>{{pi | number:'1.3-4'  }}</p>
      <p>{{pi | number:'2.2-2'  }}</p>
      <p>{{money | currency:'EUR': false}}</p>
      <hr/>
      <p>{{date}}</p>
      <p>{{date | date:'fullDate'}}</p>
      <p>{{date | date:'shortTime'}}</p>
      <hr/>
      <p>{{amount | percent}}</p>
      <hr/>
      <p>{{object}}</p>
      <div><pre>{{ object | json }}</pre></div>
    </div>
    <hr/>
    <h2>Custom pipes</h2>
      <app-custom-pipe></app-custom-pipe>
    <hr/>
    <h2>Dynamic filter</h2>
    <app-dynamic-filter></app-dynamic-filter>
  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
    {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
