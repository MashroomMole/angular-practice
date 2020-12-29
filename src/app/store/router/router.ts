import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export const ROUTER_FEATURE_KEY = 'router';

export const RouterParams = Object.freeze({
  postId: 'postId',
  commentId: 'commentId',
});
export type RouterParamsType = Partial<typeof RouterParams>;


export interface RouterState {
  navigationId: string;
  state: RouterStateWithParams;
}

export interface RouterStateWithParams {
  url: string;
  params: RouterParamsType;
  queryParams: Params;
}


/**
 * RouterParamSerializer
 * creates flat param map from all angular routes
 */
export class RouterParamSerializer implements RouterStateSerializer<RouterStateWithParams> {
  public serialize(routerState: RouterStateSnapshot): RouterStateWithParams {
    const { root, url } = routerState;
    const params = root.children.reduce(this.extractParams, { ...root.params });

    return {
      url,
      params,
      queryParams: root.queryParams,
    };
  }

  private extractParams = (sum, child): RouterParamsType => {
    Object.keys(child.params).forEach(key => {
      if (sum[key]) {
        throw new Error(`Router conflict - value for ${key} has been already defined`);
      }
      sum[key] = child.params[key];
    });
    return child.children.reduce(this.extractParams, sum);
  }
}
