import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flipped = false;
  title = 'memorama';

  flipit() {
    this.flipped = !this.flipped;
  }
}
