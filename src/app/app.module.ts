import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
