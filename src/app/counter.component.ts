import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {inrement, decrement, reset} from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }
  increment() {
    // Dispatch an increment action
    this.store.dispatch(inrement())
  }
  decrement() {
    // Dispatch an decreament action
    this.store.dispatch(decrement())
  }
  reset() {
    // Dispatch an reset action
    this.store.dispatch(reset())
  }
}
