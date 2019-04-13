import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  id: number;
  name: string;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] ;
      this.name = params['name'];
    });
  }

}
