# Content Translation Library
Bhashini-Translation is a powerful language translation library designed specifically for Indian languages. It harnesses the power of AI to offer accurate and efficient translation services. With Bhashini-Translation, you can easily integrate advanced language translation capabilities into your web applicationsIt's integrating with [Bhashini Api](https://bhashini.gitbook.io/bhashini-apis/). It seamlessly integrates with web frontends such as Vanilla JS, React, and Angular.  
Bhashini follows [ISO-639 series](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language codes.



##Getting Started
1. clone the project locally
2. open the project and in the terminal run

3. Change in  file to .env and add userId, ulcaApiKey, AuthorizationToken
```export const environment = 
  production: false,
  apiKey: 'YOUR_API_KEY',
  userId: 'YOUR_USER_ID',
  authorizationToken: 'YOUR_AUTH_TOKEN',
```
4. Signup [here](https://bhashini.gov.in/ulca/user/register) to get authentication details
    - Step 1: Fill out the registration form.
   - Step 2: Perform email authentication to enable login functionality
   - Step 3: Login using the authenticated email.
   - Step 4: Open the "My Profile" section
   - Step 5: create the API Key using Generate Button under their My Profile section. 
    [App name should use lowercase words and underscores.]
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## About Text To Text Translate Library
TexttranslateComponent is an Angular library that provides a component for translating text using the Bashani  API. It translate text from one language to another using advanced neural network models for high-quality translations. 

```
npm install  @angular/common @angular/core @angular/http @angular/platform-browser
```

## About Text To Speech Translate Library
Text-to-speech translation is a technology that enables the conversion of written text from one language into spoken words in another language.

## About Text To Text And Text To Speech Translate Library
Written text is converted from one language to another without any audio output.Written text is translated into another language and then converted into speech, allowing users to hear the content in a language they may not understand in its written form.


