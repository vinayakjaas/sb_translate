# Text To Speech Translation
Bhashini-Translation is a powerful language translation library designed specifically for Indian languages. It harnesses the power of AI to offer accurate and efficient translation services. With Bhashini-Translation, you can easily integrate advanced language translation capabilities into your web applicationsIt's integrating with [Bhashini Api](https://bhashini.gitbook.io/bhashini-apis/). It seamlessly integrates with web frontends such as Vanilla JS, React, and Angular.  
Bhashini follows [ISO-639 series](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language codes.

We have option to select a Different Sentence and the option come to translate it in some other language and translate it.The system or tool you're using employs advanced machine translation algorithms to convert the input sentence from the source language to the target language. These algorithms are based on sophisticated language models that have been trained on a massive amount of multilingual text. They learn to understand linguistic patterns and relationships across languages to generate accurate translations.
# Getting Started
1. Install the package using npm or yarn
```shell
npm install bashaini-speechtranslation 
```
<center> or </center>  
  
```shell
yarn add bashaini-speechtranslation  
```
2. Import the package in Module
```shell
import { SpeechtranslateModule } from 'bhashini-speechtranslation';
import { SpeechTranslateConfig } from 'bashaini-speechtranslation/public-api';
```
3.Add Your userId,apiKey,authorizationToken For configuration
```
providers: [
    {
      provide: 'SPEECH_TRANSLATE_CONFIG', // Use a string token to provide the configuration
      useValue: {
        userId: 'Your User Id', // Provide the user ID here
        apiKey: 'Your apiKey', // Provide the API key here
        authorizationToken: 'Your authorizationToken', // Provide the authorization token here
      } as SpeechTranslateConfig,
    },
]
```
4 Call Library  
```
<lib-speechtranslate></lib-speechtranslate>
```
## get authentication details
Signup [here](https://bhashini.gov.in/ulca/user/register) to get authentication details  
    - Step 1: Fill out the registration form.
   - Step 2: Perform email authentication to enable login functionality
   - Step 3: Login using the authenticated email.
   - Step 4: Open the "My Profile" section
   - Step 5: create the API Key using Generate Button under My Profile section.   
   - Step 6: press generate in api key to get credentials
   - Step 7: now copy `userid`, `UlcaApiKey`, and 	`authorizationToken` for `Meity` and pass as argument in `bhashini.auth("userid", "UlcaApiKey", "authorizationToken")` function 

