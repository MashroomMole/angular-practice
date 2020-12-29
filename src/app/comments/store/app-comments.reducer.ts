import { Action, createReducer, on } from '@ngrx/store';
import { postCommentsInitialState, PostCommentsState } from './state';
import { commentsLengthLoad, commentsLengthLoadSuccess, commentsLoad, commentsLoadSuccess } from './app-comments.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  postCommentsInitialState,
  on(commentsLoad),
  on(
    commentsLoadSuccess,
    (state, action): PostCommentsState => {
      return {
        ...state,
        comments: action.comments
      };
    }
  ),
  on(commentsLengthLoad),
  on(commentsLengthLoadSuccess,
    (state, action) => {
    return {
      ...state,
      comments: action.comments
    };
    })
);

// tslint:disable-next-line:typedef
export function commentsReducer(state: PostCommentsState | undefined, action: Action) {
  return _reducer(state, action);
}
