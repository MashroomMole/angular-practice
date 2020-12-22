import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomePageState, POST_FEATURE_KEY } from './state';

// export const selectPostsState = createFeatureSelector<PostState>(POST_FEATURE_KEY);
export const selectHomePageState = createFeatureSelector<HomePageState>(POST_FEATURE_KEY);
export const selectPosts = createSelector(selectHomePageState, state => state.model);

