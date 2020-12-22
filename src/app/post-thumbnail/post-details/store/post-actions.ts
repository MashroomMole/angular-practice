import { createAction, props } from '@ngrx/store';
import { PostsModel } from '../../../shared/posts.model';

export enum PostsActions {
  postsLoadSuccess = '[Posts] load comments  success',
  postsLoad = '[Posts] load comments',
  postsLoadFailure = '[Posts] load failure'
}

export const postsLoad = createAction(PostsActions.postsLoad);

export const postsLoadSuccess = createAction(
  PostsActions.postsLoadSuccess,
  props< { posts: Array<PostsModel>} >()
);

export const postsLoadFailure = createAction(
  PostsActions.postsLoadFailure,
  props< { error: string} >()
);
