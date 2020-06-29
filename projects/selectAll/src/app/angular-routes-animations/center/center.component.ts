import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';
import { animationObj } from '../animations';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  animations: animationObj
})
export class CenterComponent implements OnInit {

  FadeDirection: string = "FadeFromRight";

  constructor(private _route: Router, private _routeHistory: RouteService) { 
    this._routeHistory.AddLink(this._route.url)
    this.FadeDirection = "FadeFrom" + this._routeHistory.GetLastLink();
  }
  ngOnInit() {
  }
  

}
