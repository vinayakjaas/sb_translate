import { NgModule } from '@angular/core';
import { SpeechtranslateComponent } from './speechtranslate.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SpeechtranslateComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    SpeechtranslateComponent
  ]
})
export class SpeechtranslateModule { }
