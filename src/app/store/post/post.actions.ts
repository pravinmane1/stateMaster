import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[Post] create',
  props<{ title: string; description: string }>()
);

export const update = createAction(
  '[Post] update',
  props<{ title: string; description: string; id: number }>()
);

export const deletePost = createAction(
  '[Post] delete',
  props<{id: number }>()
);

export const clear = createAction('[Post] clear');
