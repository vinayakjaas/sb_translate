import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sb_translate';
  constructor(private router: Router) {}

  toggleTranslation() {
    const currentRoute = this.router.url;

    if (currentRoute === '/text-translate') {
      this.router.navigate(['/speech-translate']);
    } else if (currentRoute === '/text-translate') {
      this.router.navigate(['/text-translate']);
      
    } else if (currentRoute === '/text-speech') {
      this.router.navigate(['/text-translate']);
      
    } 
    else{
      this.router.navigate(['/text-speech']);
    }
  }
  
  }

