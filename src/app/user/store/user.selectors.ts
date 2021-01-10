import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './state';

export const selectUser = createFeatureSelector<UserState>(USER_FEATURE_KEY);
export const selectUserModel = createSelector(selectUser, state => state.model);

