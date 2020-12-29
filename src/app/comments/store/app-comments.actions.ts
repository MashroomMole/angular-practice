import { createAction, props } from '@ngrx/store';
import { CommentsModel } from '../../shared/model';

export enum AppCommentsActions {
  commentsLoadSuccess = '[Comments] load comments  success',
  commentsLoad = '[Comments] load comments',
  commentsLoadFailure = '[Comments] load failure',
  commentsLengthLoad = '[Comments] load length',
  commentsLengthLoadSuccess = '[Comments] load length success'
}

export const commentsLoad = createAction(AppCommentsActions.commentsLoad);

export const commentsLoadSuccess = createAction(
  AppCommentsActions.commentsLoadSuccess,
  props< { comments: CommentsModel[]} >()
);

export const commentsLoadFailure = createAction(
  AppCommentsActions.commentsLoadFailure,
  props< { error: string} >()
);

export const commentsLengthLoad = createAction(AppCommentsActions.commentsLengthLoad);
export const commentsLengthLoadSuccess = createAction(
  AppCommentsActions.commentsLoadSuccess,
  props< { comments: CommentsModel[]} >()
);

