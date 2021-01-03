import { Action, createReducer, on } from '@ngrx/store';
import { homePageInitialState, HomePageState } from './state';
import { postsLoad, postsLoadFailure, postsLoadSuccess } from './home-page.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  homePageInitialState,
  on(postsLoad),
  on(
    postsLoadSuccess,
    (state, action): HomePageState => {
      return {
        ...state,
        posts: action.posts,
        error: ''
      };
    }
  ),
  on(postsLoadFailure, (state, action): HomePageState => {
    return {
      ...state,
      posts: [],
      error: action.error
    };
  }),
);

// tslint:disable-next-line:typedef
export function homeReducers(state: HomePageState | undefined, action: Action) {
  return _reducer(state, action);
}
