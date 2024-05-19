import { createReducer, on } from '@ngrx/store';
import { counterState } from './counter.state';
import { decrement, increment, reset } from './counter.actions';

const initialState: counterState = {
  count: 1,
  isLoading: false,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { incrementBy }) => ({
    ...state,
    count: state.count + incrementBy,
  })),
  on(decrement, (state, { decrementBy }) => ({
    ...state,
    count: state.count - decrementBy,
  })),
  on(reset, (state) => ({
    ...state,
    count: 0,
  }))
);
