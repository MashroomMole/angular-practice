/**
 * Mocks router provider
 * Failed: StaticInjectorError(DynamicTestModule)[RoutingHelper -> Router]
 */
import { Router } from '@angular/router';
import { ROUTER_FEATURE_KEY, RouterParamsType } from '../../store/router/router';
import { AppState } from '../../store/reducers';

export const provideMockRouter = () => ({
  provide: Router,
  useValue: {
    url: '/'
  }
});

export const mockRouterState = (
  params: RouterParamsType = {},
): AppState => ({
  [ROUTER_FEATURE_KEY]: {
    navigationId: 'Test',
    state: {
      url: '',
      params,
      queryParams: null,
    },
  },
});
