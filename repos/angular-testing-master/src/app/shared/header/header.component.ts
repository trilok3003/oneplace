import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('title') title
  constructor(public location: Location) { }

  ngOnInit(): void {
  }
  onBack() {
   this.location.back();
  }

}
