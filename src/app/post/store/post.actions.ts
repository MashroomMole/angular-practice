import { createAction, props } from '@ngrx/store';
import { PostModel } from '../../shared/model/model';

export enum PostActions {
  postDetailsLoadSuccess = '[Post] load post details success',
  postDetailsLoad = '[Post] load post details',
  postDetailsLoadFailure = '[Post] load post details failure'
}

export const postDetailsLoad = createAction(PostActions.postDetailsLoad);

export const postDetailsLoadSuccess = createAction(
  PostActions.postDetailsLoadSuccess,
  props< { post: PostModel} >()
);

export const postDetailsLoadFailure = createAction(
  PostActions.postDetailsLoadFailure,
  props< { error: string} >()
);
