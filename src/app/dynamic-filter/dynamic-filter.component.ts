import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Observable } from "rxjs";

@Component({
  selector: 'app-dynamic-filter',
  styleUrls: ['./dynamic-filter.component.scss'],
  template:
  `      
      <h1>{{asyncTitle | async}}</h1>
      <input type="text" [(ngModel)]="searchCar">
      <button (click)="addCar()">Add car</button>
      <ul>
        <li *ngFor="let car of cars | carFilter:searchCar:'name'; let i=index">
          <p><b>{{i+1}}</b> {{car.name}} <i>{{car.description}}</i></p>
        </li>
      </ul>
  `
})
export class DynamicFilterComponent implements OnInit {
  searchCar = '';
  cars = [
    {name: 'Ford', description:'WFM 1'},
    {name: 'Mazda', description:'WFM 2'},
    {name: 'Bently', description:'WFM 3'},
    {name: 'Audi', description:'WFM 4'},
    {name: 'Mercedes', description:'WFM 5'},
    {name: 'BMW', description:'WFM 6'}
  ];

  // title = '';

  asyncTitle = Observable.of('Async title 3seconds')
      .delay(3000)
      // .subscribe((str) => this.title = str);

  addCar() {
    this.cars.push({
      name: "New car",
      description: 'WFM'
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
