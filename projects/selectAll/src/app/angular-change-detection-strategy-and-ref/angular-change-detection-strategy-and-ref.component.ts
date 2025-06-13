import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-change-detection-strategy-and-ref',
  templateUrl: './angular-change-detection-strategy-and-ref.component.html',
  styleUrls: ['./angular-change-detection-strategy-and-ref.component.css']
})
export class AngularChangeDetectionStrategyAndRefComponent implements OnInit {
  fruits: string[] = [];

  AddFruit(fruit: string): void {
    this.fruits.push(fruit);
  }
  constructor() { }

  ngOnInit() {
  }

}
