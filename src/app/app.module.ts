import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import {PowPipe} from "./pow.pipe";
import { MyPipePipe } from './my-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    PowPipe,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
