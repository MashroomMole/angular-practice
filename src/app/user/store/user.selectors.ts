import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './state';

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);
export const selectUserModel = createSelector(selectUserState, state => state.model);

