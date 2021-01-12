import * as selectors from './router-selectors';
import { AppState } from '../reducers';
import { mockRouterState } from '../../shared/tests/test.utils';
import { ROUTER_FEATURE_KEY } from './router';

describe('Router - store - selectors', () => {
  const appState: AppState = mockRouterState();
  const routerState = appState[ROUTER_FEATURE_KEY];

  it('selectRouterState', () => {
    const expected = selectors.selectRouterState(appState);
    expect(expected).toEqual(routerState);
  });

  it('routerParamFlatMap', () => {
    const expected = selectors.routerParamFlatMap(appState);
    expect(expected).toEqual(routerState.state.params);
  });

  it('selectUrl', () => {
    const expected = selectors.selectUrl(appState);
    expect(expected).toEqual(routerState.state.url);
  });

  it('selectPostID', () => {
    const expected = selectors.selectPostID(appState);
    expect(expected).toEqual(routerState.state.params.postId);
  });

});
