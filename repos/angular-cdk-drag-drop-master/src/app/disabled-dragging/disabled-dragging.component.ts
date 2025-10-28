import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
/**
 * @title Drag&Drop disabled
 */
@Component({
  selector: 'app-disabled-dragging',
  templateUrl: './disabled-dragging.component.html',
  styleUrls: ['./disabled-dragging.component.css']
})
export class DisabledDraggingComponent implements OnInit {
  items = [
    {value: 'I can be dragged', disabled: false},
    {value: 'I cannot be dragged', disabled: true},
    {value: 'I can also be dragged', disabled: false}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
