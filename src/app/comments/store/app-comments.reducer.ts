import { Action, createReducer, on } from '@ngrx/store';
import { postCommentsInitialState, PostCommentsState } from './state';
import { commentsLoad, commentsLoadSuccess } from './app-comments.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  postCommentsInitialState,
  on(commentsLoad, ((state ): any  => {
    return {
      ...state,
      postId: '1'
    };
  })),
  on(
    commentsLoadSuccess,
    (state, action): PostCommentsState => {
      return {
        ...state,
        comments: action.comments,
      };
    }
  )
);

// tslint:disable-next-line:typedef
export function commentsReducer(state: PostCommentsState | undefined, action: Action) {
  return _reducer(state, action);
}
