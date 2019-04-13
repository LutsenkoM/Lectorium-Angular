import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarComponent} from "./car/car.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRouts: Routes = [
  {
    'path':'cars',
    component: CarsPageComponent, children: [
      {
        'path':`:id/:name`,
        component: CarComponent
      }
    ]
  },
  // {
  //   'path':`cars/:id/:name`,
  //   component: CarComponent
  // },
  // {
  //   'path':`cars/:name`,
  //   component: CarComponent
  // },
  {
    'path':'',
    component: HomePageComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '**', redirectTo:'/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
