import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  @Input() content: TemplateRef<any>;
  expanded: boolean;
  @Input() heading;
  constructor() { }

  ngOnInit(): void {
  }
  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
