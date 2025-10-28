import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menus = [
    { name: 'Progress  Graph', path: 'progress-examples' },
    { name: 'Content Projection', path: 'content-projection' },
    { name: 'Scrollbar Styling', path: 'scrollbarStyling' },
    { name: 'Slider', path: 'slider' },
    { name: 'Content Projection', path: 'content-projection-v2' },
    { name: 'crud', path: 'crud' },
    { name: 'Search and Pagination Table', path: 'table'},
    { name: 'Rest', path: 'rest'}

  ];
  selectedMenu = 0;
  ngOnInit() { }
}
