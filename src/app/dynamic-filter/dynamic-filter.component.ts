import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-filter',
  styleUrls: ['./dynamic-filter.component.scss'],
  template:
  `      
      <input type="text" [(ngModel)]="searchCar">
      <ul>
        <li *ngFor="let car of cars | carFilter:searchCar:'description'; let i=index">
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
  ]

  constructor() { }

  ngOnInit() {
  }

}
