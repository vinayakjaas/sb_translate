# Text-To-Text Translation
Bhashini-Translation is a powerful language translation library designed specifically for Indian languages. It harnesses the power of AI to offer accurate and efficient translation services. With Bhashini-Translation, you can easily integrate advanced language translation capabilities into your web applicationsIt's integrating with [Bhashini Api](https://bhashini.gitbook.io/bhashini-apis/). It seamlessly integrates with web frontends such as Vanilla JS, React, and Angular.  
Bhashini follows [ISO-639 series](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language codes.



##Getting Started
1. clone the project locally
2. open the project and in the terminal run

3. Change in  file to .env and add userId, ulcaApiKey, AuthorizationToken
```export const environment = {
  production: false,
  apiKey: 'YOUR_API_KEY',
  userId: 'YOUR_USER_ID',
  authorizationToken: 'YOUR_AUTH_TOKEN',
};
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

## About Text Translate Library
TexttranslateComponent is an Angular library that provides a component for translating text using the Bashani  API. It translate text from one language to another using advanced neural network models for high-quality translations. 
```
npm install  @angular/common @angular/core @angular/http @angular/platform-browser
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
