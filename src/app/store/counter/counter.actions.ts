import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[counter page] increment count',
  props<{ incrementBy: number }>()
);

export const decrement = createAction(
  '[counter page] decrement count',
  props<{ decrementBy: number }>()
);

export const reset = createAction('[counter page]');
