import { Action, createReducer, on } from '@ngrx/store';
import { postInitialState, PostState } from './state';
import { postPreviewLoad, postPreviewLoadSuccess } from './post-actions';


// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  postInitialState,
  on(postPreviewLoad),
  on(
    postPreviewLoadSuccess,
    (state, action): PostState => {
      return {
        ...state,
        id: action.post.id,
        title: action.post.title,
        body: action.post.body,
        userId: action.post.userId,
      };
    }
  )
);

// tslint:disable-next-line:typedef
export function postReducer(state: PostState | undefined, action: Action) {
  return _reducer(state, action);
}
