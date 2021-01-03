import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POST_FEATURE_KEY, PostState } from './state';
import { routerParamFlatMap } from '../../store/router/router-selectors';

export const selectPostState = createFeatureSelector<PostState>(POST_FEATURE_KEY);
export const selectPostId = createSelector(selectPostState, state => state.id);
export const selectRouterPostId = createSelector(selectPostState, routerParamFlatMap, (postState, routerState) => {
  if (routerState?.postId) {
    return routerState.postId;
  }
}
);
