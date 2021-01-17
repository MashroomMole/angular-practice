import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POST_FEATURE_KEY, PostState } from './state';

export const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);
export const selectPostLoading = createSelector(selectPostState, (state) => state.loading);
