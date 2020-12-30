import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POST_FEATURE_KEY, PostState } from './state';

export const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);
export const selectPostId = createSelector(selectPostState, state => state.id);
// export const getSelectedPost = createSelector(selectPostState, selectRouterState, (state, router) => state.router.params.postId);

