import { createSelector } from '@ngrx/store';
import { State } from '../state.interface';
import { state } from '@angular/animations';
import { PostState } from './post.state';

const featureSelector = (state: State) => state.post;

export const postSelector = createSelector(
  featureSelector,
  (state) => state.postList
);

export const selectPostById = (props: { id: number }) =>
  createSelector(featureSelector, (state: PostState) =>
    state.postList.find((post) => post.id === props.id)
  );
