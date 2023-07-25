import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sb_translate';
  goToNextPage() {
    console.log('Navigating to the next page.');
  }
}
  
