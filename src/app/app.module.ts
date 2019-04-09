import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import {PowPipe} from "./pow.pipe";
import { MyPipePipe } from './my-pipe.pipe';
import { DynamicFilterComponent } from './dynamic-filter/dynamic-filter.component';
import { CarFilterPipe } from './car-filter.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    PowPipe,
    MyPipePipe,
    DynamicFilterComponent,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
