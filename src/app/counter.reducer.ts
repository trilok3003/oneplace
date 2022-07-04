import { createReducer, on } from "@ngrx/store";
import { decrement, inrement, reset } from "./counter.actions";
export const initialValue = 0
export const counterReducer = createReducer(
  initialValue,
  on(inrement, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)