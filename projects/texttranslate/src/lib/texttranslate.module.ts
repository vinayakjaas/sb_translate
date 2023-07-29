import { NgModule } from '@angular/core';
import { TexttranslateComponent } from './texttranslate.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TexttranslateComponent
  ],
  imports: [CommonModule, HttpClientModule , FormsModule],
  exports: [
    TexttranslateComponent
  ]
})
export class TexttranslateModule { }
