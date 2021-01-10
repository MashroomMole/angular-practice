import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_PAGE_FEATURE_KEY, HomePageState } from './state';

export const selectHomePageState = createFeatureSelector<HomePageState>(HOME_PAGE_FEATURE_KEY);
export const selectPosts = createSelector(selectHomePageState, state => state.posts);
export const selectPostsLoading = createSelector(selectHomePageState, state => state.loading);


