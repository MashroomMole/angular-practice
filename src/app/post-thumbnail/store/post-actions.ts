import { createAction, props } from '@ngrx/store';
import { PostModel } from '../../shared/model';

export enum PostActions {
  postPreviewLoadSuccess = '[Post] load post details success',
  postPreviewLoad = '[Post] load post details',
  postPreviewLoadFailure = '[Post] load post details failure'
}

export const postPreviewLoad = createAction(PostActions.postPreviewLoad);

export const postPreviewLoadSuccess = createAction(
  PostActions.postPreviewLoadSuccess,
  props< { post: PostModel} >()
);

export const postLoadFailure = createAction(
  PostActions.postPreviewLoadFailure,
  props< { error: string} >()
);
