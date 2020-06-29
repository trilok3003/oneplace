import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }
  panes = []
  select(pane) {
    this.panes.forEach((p) => {
      p.selected = false;
    });
    pane.selected = true;
  };
  addPane(pane) {
    if (this.panes.length === 0) {
      this.select(pane);
    }
    this.panes.push(pane);
  };
  ngOnInit() {
  }
}
