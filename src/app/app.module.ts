import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexttranslateModule } from 'projects/texttranslate/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { SpeechtranslateModule } from 'projects/speechtranslate/src/public-api';
import { SpeechTranslationComponent } from './speech-translation/speech-translation.component';
import { TextTranslationComponent } from './text-translation/text-translation.component';
import { TextAndSpeechComponent } from './text-and-speech/text-and-speech.component';
import { TextandspeechModule } from 'projects/textandspeech/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    SpeechTranslationComponent,
    TextTranslationComponent,
    TextAndSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TexttranslateModule,
    SpeechtranslateModule,
    TextandspeechModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
