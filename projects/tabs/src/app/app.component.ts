import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabs';
  i = 0
  homeTab = {
    id: 1,
    title: 'Hello'
  }
  worldTab = {
    id: 2,
    title: 'World'
  }
}
