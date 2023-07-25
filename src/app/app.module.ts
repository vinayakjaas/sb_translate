import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexttranslateModule } from 'projects/texttranslate/src/public-api';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TexttranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
