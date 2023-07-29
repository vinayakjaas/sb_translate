import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-text-translation',
  templateUrl: './text-translation.component.html',
  styleUrls: ['./text-translation.component.css']
})
export class TextTranslationComponent implements OnInit , AfterViewInit{
  content: string = ''; // Initialize with an empty string
  @ViewChild('contentElement', { static: true }) contentElement!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDataFromJson();
  }

  loadDataFromJson() {
    this.http.get<any>('assets/content-data.json').subscribe((data) => {
      this.content = data.content;
    });
  }

  ngAfterViewInit() {

  }

}
