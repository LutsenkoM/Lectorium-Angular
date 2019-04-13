import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarsService } from './cars.service';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
