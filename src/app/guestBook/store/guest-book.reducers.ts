import { Action, createReducer, on } from '@ngrx/store';
import { guestBookInitialState, GuestBookState } from './state';
import {
  createEntry,
  createEntryFailure,
  createEntrySuccess,
  entriesLoad,
  entriesLoadFailure,
  entriesLoadSuccess
} from './guest-book.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  guestBookInitialState,
  on(entriesLoad,
    (state): GuestBookState => {
      return {
          ...state,
          loading: true
      };
    }
  ),
  on(
    entriesLoadSuccess,
    (state, action): GuestBookState => {
      return {
        ...state,
        entries: action.entries,
        error: '',
        loading: false
      };
    }
  ),
  on(
    entriesLoadFailure,
    (state, action): GuestBookState => {
      return {
        ...state,
        entries: [],
        error: action.error,
        loading: false
      };
    }
  ),
  on(createEntry),
  on(
    createEntrySuccess,
    (state, action): GuestBookState => {
      return {
        ...state,
        entries: [{...action.entry}, ...state.entries ],
        error: ''
      };
    }
  ),
  on(createEntryFailure,
    (state, action): GuestBookState => {
      return {
        ...state,
        entries: state.entries,
        error: action.error
      };
    }
  ),
);

// tslint:disable-next-line:typedef
export function guestBookReducers(state: GuestBookState | undefined, action: Action) {
  return _reducer(state, action);
}
