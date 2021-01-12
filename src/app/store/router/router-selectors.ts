import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROUTER_FEATURE_KEY, RouterParamsType, RouterState } from './router';


export const selectRouterState = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);

export const routerParamFlatMap = createSelector(
  selectRouterState,
  (store): RouterParamsType => (store ? store.state.params : {})
);

export const selectUrl = createSelector(
  selectRouterState,
  (store) => (store ? store.state.url : {}));

export const selectPostID = createSelector(
  routerParamFlatMap,
  (params) => (params ? params['id'] : {})
);
