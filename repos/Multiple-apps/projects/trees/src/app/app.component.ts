import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trees';
  trees = [{
    name: 'Parent',
    nodes: [
      {
        name: 'child', nodes: [
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [] }
            ]
          },
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [] }
            ]
          },
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [] }
            ]
          }
        ]
      },
      {
        name: 'child', nodes: [
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [] }
            ]
          },
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [] }
            ]
          },
          {
            name: 'grand child', nodes: [
              { name: 'grand grand child', nodes: [
              { name: 'grand grand grand child', nodes: [] }
              ] }
            ]
          }
        ]
      },
    ]
  }
  ];
}
