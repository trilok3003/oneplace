import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  selection = {value: 'component'};
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
}
