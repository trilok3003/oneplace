import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projected',
  templateUrl: './content-projected.component.html',
  styleUrls: ['./content-projected.component.css']
})
export class ContentProjectedComponent implements OnInit {
  message = "welcome"
  constructor() { }

  ngOnInit(): void {
  }

}
