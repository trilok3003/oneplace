import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-scrollintoview-smooth',
  templateUrl: './navigation-scrollintoview-smooth.component.html',
  styleUrls: ['./navigation-scrollintoview-smooth.component.css']
})
export class NavigationScrollintoviewSmoothComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

}
