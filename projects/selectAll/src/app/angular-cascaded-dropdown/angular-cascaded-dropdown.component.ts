import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-cascaded-dropdown',
  templateUrl: './angular-cascaded-dropdown.component.html',
  styleUrls: ['./angular-cascaded-dropdown.component.css']
})
export class AngularCascadedDropdownComponent implements OnInit {
  countries: Object = {
    'Asia': ['India', 'Sri Lanka', 'Pakistan', 'Afganistan'],
    'Europe': ['Hungary', 'Germany', 'France'],
    'Americas': ['North America', 'Mexico']
  }
  continent: string = 'Americas';

  constructor() { }

  ngOnInit() {
  }

}
