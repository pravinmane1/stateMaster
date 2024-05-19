import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';
import { State } from '../state.interface';

const featureSelector = (state:State) => state.counter; //createFeatureSelector<counterState>('counter');

export const counterSelector = createSelector(
  featureSelector,
  (state) => state.count
);
