import { createAction, props } from '@ngrx/store';
import { PostModel } from '../../shared/model/model';

export enum HomePageActions {
  postsLoadSuccess = '[Posts] load posts success',
  postsLoad = '[Posts] load posts',
  postsLoadFailure = '[Posts] load posts failure'
}

export const postsLoad = createAction(HomePageActions.postsLoad);

export const postsLoadSuccess = createAction(
  HomePageActions.postsLoadSuccess,
  props< { posts: Array<PostModel>} >()
);

export const postsLoadFailure = createAction(
  HomePageActions.postsLoadFailure,
  props< { error: string } >()
);

