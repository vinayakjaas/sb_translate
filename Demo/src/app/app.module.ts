import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SpeechTranslationComponent } from './speech-translation/speech-translation.component';
import { TextTranslationComponent } from './text-translation/text-translation.component';
import { TextAndSpeechComponent } from './text-and-speech/text-and-speech.component';
import { SpeechtranslateModule } from 'bashaini-speechtranslation';
import { SpeechTranslateConfig } from 'bashaini-speechtranslation/public-api';
import { TextandspeechModule } from 'bashaini-textandspeechtranslation';
import { TextandspeechConfig } from 'bashaini-textandspeechtranslation/public-api';
import { TextTranslationModule } from 'bhashini-texttranslation1';
import { TextTranslateConfig } from 'bhashini-texttranslation1/lib/text-translate.config';

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
    SpeechtranslateModule,
    TextandspeechModule,
    TextTranslationModule
  ],
  providers: [
    {
      provide: 'TEXT_TRANSLATE_CONFIG', // Use a string token to provide the configuration
      useValue: {
        userId: 'Your User Id', // Provide the user ID here
        apiKey: 'Your apiKey', // Provide the API key here
        authorizationToken: 'Your authorizationToken', // Provide the authorization token here
      } as TextTranslateConfig ,
    },
    {
      provide: 'SPEECH_TRANSLATE_CONFIG', // Use a string token to provide the configuration
      useValue: {
        userId: 'Your User Id', // Provide the user ID here
        apiKey: 'Your apiKey', // Provide the API key here
        authorizationToken: 'Your authorizationToken', // Provide the authorization token here
      } as SpeechTranslateConfig,
    },
    {
      provide: 'TEXT_AND_SPEECH_CONFIG', // Use a string token to provide the configuration
      useValue: {
        userId: 'Your User Id', // Provide the user ID here
        apiKey: 'Your apiKey', // Provide the API key here
        authorizationToken: 'Your authorizationToken', // Provide the authorization token here
      } as TextandspeechConfig,
    },

],
  bootstrap: [AppComponent]
})

export class AppModule { }
