import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-speech-translation',
  templateUrl: './speech-translation.component.html',
  styleUrls: ['./speech-translation.component.css']
})
export class SpeechTranslationComponent {
  aboutTheLegend: string[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDataFromJson();
  }

  loadDataFromJson() {
    this.http.get<any>('assets/tribute-data.json').subscribe((data) => {
      this.aboutTheLegend = data.aboutTheLegend.intro;
    });
  }

}
