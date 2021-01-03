import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GUEST_BOOK_FEATURE_KEY, GuestBookState } from './state';

export const selectGuestBookState = createFeatureSelector<GuestBookState>(GUEST_BOOK_FEATURE_KEY);
export const selectEntries = createSelector(selectGuestBookState, state => state.entries);
