import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POST_COMMENTS_FEATURE_KEY, PostCommentsState } from './state';

export const selectCommentsState = createFeatureSelector<PostCommentsState>(POST_COMMENTS_FEATURE_KEY);
export const selectComments = createSelector(selectCommentsState, state => state.comments);
