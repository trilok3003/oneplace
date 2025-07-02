import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './angular-routes-animations/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedLink: string;
  currentLink: string;
  
  constructor(private _route: Router, private _routeHistory: RouteService) {
  }

  RouteTo(clickedLink: string) {
    this._route.navigate(['/' + clickedLink]);
  }
}
