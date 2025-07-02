import { createAction } from '@ngrx/store';
export const inrement = createAction("Counter Increment");
export const decrement = createAction("Counter Decrement");
export const reset = createAction("Counter reset");


