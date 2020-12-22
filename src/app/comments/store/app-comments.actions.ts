import { createAction, props } from '@ngrx/store';
import { CommentsModel } from '../../shared/posts.model';

export enum AppCommentsActions {
  commentsLoadSuccess = '[Comments] load comments  success',
  commentsLoad = '[Comments] load comments',
  commentsLoadFailure = '[Comments] load failure'
}

export const commentsLoad = createAction(AppCommentsActions.commentsLoad, props< {id: string}>());

export const commentsLoadSuccess = createAction(
  AppCommentsActions.commentsLoadSuccess,
  props< { comments: CommentsModel[]} >()
);

export const commentsLoadFailure = createAction(
  AppCommentsActions.commentsLoadFailure,
  props< { error: string} >()
);
