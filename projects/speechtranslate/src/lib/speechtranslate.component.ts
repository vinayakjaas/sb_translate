
import { Component, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface TtsApiResponse {
  pipelineResponse?: {
    audio?: {
      audioContent?: string;
    }[];
  }[];
}

interface TranslationApiResponse {
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
  selector: 'lib-speechtranslate',
  templateUrl: './speechtranslate.component.html',
  styleUrls: ['./speechtranslate.component.css'],
})
export class SpeechtranslateComponent {
  language: Language = {
    sourceLanguage: 'en',
    targetLanguageList: [
      'sl',
      'as',
      'bn',
      'brx',
      'doi',
      'gom',
      'gu',
      'hi',
      'kn',
      'ks',
      'mai',
      'ml',
      'mni',
      'mr',
      'ne',
      'or',
      'pa',
      'sa',
      'sat',
      'sd',
      'ta',
      'te',
      'ur',
    ],
  };
  selectedTargetLanguage: string = 'sl';
  selectedText: string = '';
  translatedOutput: string | undefined;
  audioElement: HTMLAudioElement = new Audio();
  ttsOutput: string | undefined;

  constructor(private http: HttpClient, private elementRef: ElementRef) {}
  onTextSelection(event: MouseEvent) {
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText) {
      this.selectedText = selectedText;
    } else {
      this.selectedText = '';
      this.translatedOutput = ''; // Reset translated output when no text is selected
    }
  }

  translateAndSpeak() {
    if (!this.selectedText) {
      return;
    }

    const url = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';
    const userId = '26f83e9d425a40a28ec59f944cb4da6c';
    const apiKey = '1829da2d40-6a44-4d3d-ac61-9850afd41175';
    const authorizationToken =
      'cYZieH0OCn8PUZbylALnCkwvs8PYvAiYwiQ7FUj1V7_Vspia5jvxFs0T3R3-DXF_';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      userID: userId,
      ulcaApiKey: apiKey,
      Authorization: authorizationToken,
    });

    const translationPayload = {
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
            source: this.selectedText,
          },
        ],
      },
    };

    this.http.post<TranslationApiResponse>(url, translationPayload, { headers }).subscribe(
      (response) => {
        console.log('Translation API response:', response);
        if (
          response.pipelineResponse &&
          response.pipelineResponse.length > 0 &&
          response.pipelineResponse[0].output &&
          response.pipelineResponse[0].output.length > 0
        ) {
          this.translatedOutput = response.pipelineResponse[0].output[0].target;
          this.speakTranslation();
        } else {
          this.translatedOutput = undefined;
        }
      },
      (error) => {
        console.error('Translation API error:', error);
        // Handle the error here
      }
    );
  }

  speakTranslation() {
    if (!this.translatedOutput) {
      return;
    }

    const url = 'https://dhruva-api.bhashini.gov.in/services/inference/pipeline';
    const userId = '26f83e9d425a40a28ec59f944cb4da6c';
    const apiKey = '1829da2d40-6a44-4d3d-ac61-9850afd41175';
    const authorizationToken =
      'cYZieH0OCn8PUZbylALnCkwvs8PYvAiYwiQ7FUj1V7_Vspia5jvxFs0T3R3-DXF_';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      userID: userId,
      ulcaApiKey: apiKey,
      Authorization: authorizationToken,
    });

    const ttsServiceIds: { [key: string]: string } = {
      as: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      bn: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      brx: 'ai4bharat/indic-tts-coqui-misc-gpu--t4',
      en: 'ai4bharat/indic-tts-coqui-misc-gpu--t4',
      gu: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      hi: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      kn: 'ai4bharat/indic-tts-coqui-dravidian-gpu--t4',
      ml: 'ai4bharat/indic-tts-coqui-dravidian-gpu--t4',
      mni: 'ai4bharat/indic-tts-coqui-misc-gpu--t4',
      mr: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      or: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      pa: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      raj: 'ai4bharat/indic-tts-coqui-indo_aryan-gpu--t4',
      ta: 'ai4bharat/indic-tts-coqui-dravidian-gpu--t4',
      te: 'ai4bharat/indic-tts-coqui-dravidian-gpu--t4',
    };

    const ttsPayload = {
      pipelineTasks: [
        {
          taskType: 'tts',
          config: {
            language: {
              sourceLanguage: this.selectedTargetLanguage,
            },
            serviceId: ttsServiceIds[this.selectedTargetLanguage],
            gender: 'female',
            samplingRate: 8000,
          },
        },
      ],
      inputData: {
        input: [
          {
            source: this.translatedOutput,
          },
        ],
      },
    };

    this.http.post<TtsApiResponse>(url, ttsPayload, { headers }).subscribe(
      (response) => {
        console.log('TTS API response:', response);
        if (
          response.pipelineResponse &&
          response.pipelineResponse.length > 0 &&
          response.pipelineResponse[0].audio &&
          response.pipelineResponse[0].audio.length > 0 &&
          response.pipelineResponse[0].audio[0].audioContent
        ) {
          this.ttsOutput = response.pipelineResponse[0].audio[0].audioContent;
          this.playAudio();
        } else {
          this.ttsOutput = undefined;
        }
      },
      (error) => {
        console.error('TTS API error:', error);
        // Handle the error here
      }
    );
  }

  playAudio() {
    if (this.ttsOutput) {
      const audioUrl = `data:audio/wav;base64,${this.ttsOutput}`;
      this.audioElement.src = audioUrl;
      this.audioElement.load();
      this.audioElement.play();
    }
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
      // ... Add other language cases ...
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
