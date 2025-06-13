import { Component, OnInit } from '@angular/core';
import { animationObj } from '../animations';
import { Router } from '@angular/router';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  animations: animationObj
})
export class RightComponent implements OnInit {
  constructor(private _route: Router, private _routeHistory: RouteService) {
    this._routeHistory.AddLink(this._route.url)
  
}
  ngOnInit() {
  }

}
