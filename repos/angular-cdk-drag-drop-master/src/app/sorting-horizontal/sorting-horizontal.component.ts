import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
/**
 * @title Drag&Drop horizontal sorting
 */
@Component({
  selector: 'app-sorting-horizontal',
  templateUrl: './sorting-horizontal.component.html',
  styleUrls: ['./sorting-horizontal.component.css']
})
export class SortingHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}
