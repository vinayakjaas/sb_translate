import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environment'; 
interface ApiResponse {
  pipelineResponse?: {
    output?: {
      target?: string;
    }[];
  }[];
}
interface Language {
  sourceLanguage: string;
  targetLanguageList: string[];
}
@Component({
  selector: 'lib-texttranslate',
  templateUrl:'texttranslate.component.html' ,
  styles: [
    `.translation-container {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: black;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      justify-content: center
  }
  
  .language-select {
      flex: 1; /* Take up available space in the container */
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 14px;
      background-color: #fff;
  }
  
  .translate-button {
      margin-left: 10px; /* Add some spacing between the select and the button */
      padding: 8px 15px;
      border: none;
      border-radius: 3px;
      background-color: #007bff;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
  }
  
  /* Style for the button when hovered */
  .translate-button:hover {
      background-color: #0056b3;
  }
  
  /* Style for the button when clicked */
  .translate-button:active {
      background-color: #003e80;
  } 
  `
  ]
})
export class TexttranslateComponent  implements AfterContentInit{
  @ContentChild('contentElement') contentElementRef?: ElementRef;
  

  language: Language = {
    sourceLanguage: 'en',
    targetLanguageList: ['sl','as','bn','brx','doi','gom','gu','hi','kn','ks','mai','ml','mni','mr','ne','or','pa','sa','sat','sd','ta','te','ur'],
  };
  selectedTargetLanguage: string = 'sl';
  translatedOutput: string | undefined;
  showTranslation: boolean = false;
  showContentElement: boolean = true;

  constructor(private http: HttpClient) {}

  ngAfterContentInit() {
    this.translateContent();
  }

  translateContent() {
    if (!this.contentElementRef) return;

    const url = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      userID: environment.userId,
      ulcaApiKey: environment.apiKey,
      Authorization: environment.authorizationToken,
    });

    const text = this.getContent();

    const payload = {
      pipelineTasks: [
        {
          taskType: 'translation',
          config: {
            language: {
              sourceLanguage: this.language.sourceLanguage,
              targetLanguage: this.selectedTargetLanguage,
            },
            serviceId: 'ai4bharat/indictrans-v2-all-gpu--t4',
          },
        },
      ],
      inputData: {
        input: [
          {
            source: text,
          },
        ],
      },
    };

    
    this.http.post<ApiResponse>(url, payload, { headers }).subscribe(
      (response) => {
        console.log('API response:', response); // Display the API response in the console

        if (
          response.pipelineResponse &&
          response.pipelineResponse.length > 0 &&
          response.pipelineResponse[0].output &&
          response.pipelineResponse[0].output.length > 0
        ) {
          this.translatedOutput = response.pipelineResponse[0].output[0].target;
          this.showTranslation = true;
          this.showContentElement = false; // Hide contentElement when the translation is triggered
        } else {
          this.translatedOutput = undefined;
          this.showTranslation = false;
        }
      },
      (error) => {
        console.error('API error:', error);
        this.translatedOutput = undefined;
        this.showTranslation = false;
      }
    );
  }

  toggleTranslation() {
    this.showTranslation = !this.showTranslation;
  }

  getContent(): string {
    return this.contentElementRef?.nativeElement.innerText.trim() || '';
  }

  getLanguageName(code: string): string {
    const language = this.language.targetLanguageList.find((lang) => lang === code);
    return language ? this.getLanguageDisplayName(language) : '';
  }

  getLanguageDisplayName(code: string): string {
    switch (code) {
      case 'sl':
        return 'Select Language';
      case 'as':
        return 'Assamese';
      case 'bn':
        return 'Bengali';
      case 'brx':
        return 'Bodo';
      case 'doi':
        return 'Dogri';
      case 'gom':
        return 'Konkani';
      case 'gu':
        return 'Gujarati';
      case 'hi':
        return 'Hindi';
      case 'kn':
        return 'Kannada';
      case 'ks':
        return 'Kashmiri';
      case 'mai':
        return 'Maithili';
      case 'ml':
        return 'Malayalam';
      case 'mni':
        return 'Manipuri';
      case 'mr':
        return 'Marathi';
      case 'ne':
        return 'Nepali';
      case 'or':
        return 'Odia';
      case 'pa':
        return 'Punjabi';
      case 'sa':
        return 'Sanskrit';
      case 'sat':
        return 'Santali';
      case 'sd':
        return 'Sindhi';
      case 'ta':
        return 'Tamil';
      case 'te':
        return 'Telugu';
      case 'ur':
        return 'Urdu';
      default:
        return '';
    }
  }

}
