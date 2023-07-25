import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextTranslationComponent } from './text-translation/text-translation.component';
import {SpeechTranslationComponent} from './speech-translation/speech-translation.component'
const routes: Routes = [
  { path: 'text-translate', component: TextTranslationComponent }, // Route for TextTranslateComponent
  { path: 'speech-translate', component: SpeechTranslationComponent}, // Route for SpeechTranslateComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
