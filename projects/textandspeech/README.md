# Text To Text And Speech Translation
Bhashini-Translation is a powerful language translation library designed specifically for Indian languages. It harnesses the power of AI to offer accurate and efficient translation services. With Bhashini-Translation, you can easily integrate advanced language translation capabilities into your web applicationsIt's integrating with [Bhashini Api](https://bhashini.gitbook.io/bhashini-apis/). It seamlessly integrates with web frontends such as Vanilla JS, React, and Angular.  
Bhashini follows [ISO-639 series](https://www.loc.gov/standards/iso639-2/php/code_list.php) of language codes.

Users can first input text into the text area, then choose to either have the text translated into a different language or converted into speech (or both). This could be particularly useful for scenarios where users want to communicate with someone who speaks a different language or want to listen to content rather than reading it.
# Getting Started
1. Install the package using npm or yarn
```shell
npm install bashaini-textandspeechtranslation 
```
<center> or </center>  
  
```shell
yarn add bashaini-textandspeechtranslation 
```
2. Import the package in Module
```shell
import { TextandspeechModule } from 'bashaini-textandspeechtranslation';
import { TextandspeechConfig } from 'bashaini-textandspeechtranslation/public-api';
```
3.Add Your userId,apiKey,authorizationToken For configuration
```
providers: [
    {
      provide: 'TEXT_AND_SPEECH_CONFIG', // Use a string token to provide the configuration
      useValue: {
        userId: 'Your User Id', // Provide the user ID here
        apiKey: 'Your apiKey', // Provide the API key here
        authorizationToken: 'Your authorizationToken', // Provide the authorization token here
      } as TextandspeechConfig,
    },
]
```
4 Call Library  
```
<lib-textandspeech></lib-textandspeech>
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

