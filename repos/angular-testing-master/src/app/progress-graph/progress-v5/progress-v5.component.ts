import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-v5',
  templateUrl: './progress-v5.component.html',
  styleUrls: ['./progress-v5.component.css']
})
export class ProgressV5Component implements OnInit {
  data = [{color:'#2bc4bd', percent:50}, {color:'#7f58a3', percent:31}, {color:'#ebb860', percent:19}];
  constructor() { }

  ngOnInit(): void {
  }

}
