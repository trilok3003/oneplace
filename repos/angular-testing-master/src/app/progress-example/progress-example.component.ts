import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progress-example',
  templateUrl: './progress-example.component.html',
  styleUrls: ['./progress-example.component.css']
})
export class ProgressExampleComponent implements OnInit {
  progress = 10;
  readonly progress1: Observable<number>;
  constructor() {
    this.progress1 = this.emulateProgress();
  
  }
  
  emulateProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < 100) {
          val++;
        } else {
          val = 0;
        }
  
        observer.next(val);
      }, 100);
  
      return () => {
        clearInterval(interval);
      };
    });
  }
  ngOnInit() {}
}
