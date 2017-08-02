import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
