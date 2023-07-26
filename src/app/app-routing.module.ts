import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextTranslationComponent } from './text-translation/text-translation.component';
import {SpeechTranslationComponent} from './speech-translation/speech-translation.component'
import { TextSpeechComponent } from './text-speech/text-speech.component';
const routes: Routes = [
  { path: 'text-translate', component: TextTranslationComponent }, // Route for TextTranslateComponent
  { path: 'speech-translate', component: SpeechTranslationComponent}, // Route for SpeechTranslateComponent
  {path: 'text-speech', component: TextSpeechComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
