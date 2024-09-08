import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About Us';
  description: string = 'This is the about page of our Angular application.';

  constructor() { }

  ngOnInit(): void {
  }
}
