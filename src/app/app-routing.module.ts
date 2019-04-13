import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const appRouts: Routes = [
  {
    'path':'cars',
    component: CarsPageComponent
  },
  {
    'path':'',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
