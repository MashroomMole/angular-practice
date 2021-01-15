import { Action, createReducer, on } from '@ngrx/store';
import { postInitialState, PostState } from './state';
import { postDetailsLoad, postDetailsLoadFailure, postDetailsLoadSuccess } from './post.actions';


// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  postInitialState,
  on(postDetailsLoad),
  on(
    postDetailsLoadSuccess,
    (state, action): PostState => {
      return {
        ...state,
        id: action.post.id,
        title: action.post.title,
        body: action.post.body,
        userId: action.post.userId,
        error: ''
      };
    }
  ),
  on(
    postDetailsLoadFailure,
    (state, action): PostState => {
      return {
        ...state,
        error: action.error
      };
    }
  )
);

// tslint:disable-next-line:typedef
export function postReducer(state: PostState | undefined, action: Action) {
  return _reducer(state, action);
}
