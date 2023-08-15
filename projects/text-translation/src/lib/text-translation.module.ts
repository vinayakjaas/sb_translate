import { NgModule } from '@angular/core';
import { TextTranslationComponent } from './text-translation.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TextTranslationComponent
  ],
  imports: [CommonModule, HttpClientModule , FormsModule],
  exports: [
    TextTranslationComponent
  ]
})
export class TextTranslationModule { }

