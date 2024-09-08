import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Virtual Community Support';

  constructor() {
    setTimeout(() => {
      this.title = 'Welcome to our Community!';
    }, 2000);
  }
}
