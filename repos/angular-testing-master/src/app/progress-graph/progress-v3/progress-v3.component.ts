import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-v3',
  templateUrl: './progress-v3.component.html',
  styleUrls: ['./progress-v3.component.css'],
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',

    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',

    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  }
})
export class ProgressV3Component implements OnInit {
 /** Current value of the progressbar. */
 @Input() value = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
