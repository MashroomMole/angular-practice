import { RouterParamSerializer, RouterParamsType } from './router';
import { routerParamFlatMap } from './router-selectors';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { mockRouterState } from '../../shared/tests/test.utils';

const mockAngularRouterState = (
  params: RouterParamsType = {},
  children: Array<RouterParamsType> = [],
  url: string = ''
): RouterStateSnapshot => ({
  url,
  root: ({
    params,
    children: children.map((child) => ({ params: child, children: [] })),
  }) as ActivatedRouteSnapshot,
});

describe('Router spec', () => {
  it('should extract params', () => {
    const state = mockRouterState({ postId: '1' });
    const value = routerParamFlatMap(state);
    expect(value.postId).toEqual('1');
  });

  it('should work if router is undefined', () => {
    const value = routerParamFlatMap({ router: undefined });
    expect(value.postId).toBeUndefined();
  });

  it('should serialize route correctly', () => {
    const serializer = new RouterParamSerializer();
    const params: RouterParamsType = { commentId: '1' };

    const state = mockAngularRouterState({}, [{commentId: '1'}]);
    const value = serializer.serialize(state);
    expect(value.params).toEqual(params);
  });
});
