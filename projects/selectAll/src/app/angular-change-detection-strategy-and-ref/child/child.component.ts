import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit {

  @Input() fruits: string[];

  constructor(private cdr: ChangeDetectorRef) { }

  Refresh() {
    this.cdr.detectChanges();
  }
  ngOnInit() {
  }

}
