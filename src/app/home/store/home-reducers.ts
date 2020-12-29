import { Action, createReducer, on } from '@ngrx/store';
import { homePageInitialState, HomePageState } from './state';
import { HomePageModel } from '../../shared/model';
import { postsLoad, postsLoadSuccess } from './home-page.actions';

// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  homePageInitialState,
  on(postsLoad),
  on(
    postsLoadSuccess,
    (state, action): HomePageModel => {
      return {
        ...state,
        posts: action.posts,
      };
    }
  )
);

// tslint:disable-next-line:typedef
export function homeReducers(state: HomePageState | undefined, action: Action) {
  return _reducer(state, action);
}
