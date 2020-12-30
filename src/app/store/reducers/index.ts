import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ROUTER_FEATURE_KEY, RouterState } from '../router/router';
import { POST_FEATURE_KEY, PostState } from '../../post/store/state';
import { HOME_PAGE_FEATURE_KEY, HomePageState } from '../../home/store/state';
import { POST_COMMENTS_FEATURE_KEY, PostCommentsState } from '../../comments/store/state';


export interface State {
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export interface AppState {
  [ROUTER_FEATURE_KEY]?: RouterState;
  [POST_FEATURE_KEY]?: PostState;
  [HOME_PAGE_FEATURE_KEY]?: HomePageState;
  [POST_COMMENTS_FEATURE_KEY]?: PostCommentsState;
}
