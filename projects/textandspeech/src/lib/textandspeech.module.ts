import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TextandspeechComponent } from './textandspeech.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TextandspeechComponent
  ],
  imports: [HttpClientModule,
    FormsModule,
    CommonModule],
  exports: [
    TextandspeechComponent
  ],
})
export class TextandspeechModule { }
