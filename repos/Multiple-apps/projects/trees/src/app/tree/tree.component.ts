import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  nodes;
  @Input('nodes')set setNodes(value) {
    this.nodes = value
  }
  constructor() { }

  ngOnInit() {
  }

}
