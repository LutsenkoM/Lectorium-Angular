import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  // hero: Hero;
  // onSelect(hero: Hero): void {
  //   this.hero = hero;
  //   // console.log(this.selectedHero);
  //   // console.log(hero)
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
