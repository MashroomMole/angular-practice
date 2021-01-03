import { Action, createReducer, on } from '@ngrx/store';
import { postCommentsInitialState, PostCommentsState } from './state';
import { commentsLoad, commentsLoadFailure, commentsLoadSuccess, navigateToComments } from './app-comments.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  postCommentsInitialState,
  on(commentsLoad),
  on(navigateToComments),
  on(
    commentsLoadSuccess,
    (state, action): PostCommentsState => {
      return {
        ...state,
        comments: action.comments,
        error: ''
      };
    }
  ),
  on(
    commentsLoadFailure,
    (state, action): PostCommentsState => {
      return {
        ...state,
        comments: [],
        error: action.error
      };
    }
  ),
);

// tslint:disable-next-line:typedef
export function commentsReducer(state: PostCommentsState | undefined, action: Action) {
  return _reducer(state, action);
}
