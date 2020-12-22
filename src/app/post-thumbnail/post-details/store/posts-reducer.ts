import { Action, createReducer, on } from '@ngrx/store';
import { homePageInitialState, HomePageState } from './state';
import { postsLoad, postsLoadSuccess } from './post-actions';
import { HomePageModel } from '../../../shared/posts.model';


const setLoading = (state: HomePageState) => {
  return {
    ...state,
    loading: true,
  };
};

const _reducer = createReducer(
  homePageInitialState,
  on(postsLoad),
  on(
    postsLoadSuccess,
    (state, action): HomePageModel => {
      return {
        ...state,
        model: action.posts,
      };
    }
  )
);

// tslint:disable-next-line:typedef
export function postsReducer(state: HomePageState | undefined, action: Action) {
  return _reducer(state, action);
}
