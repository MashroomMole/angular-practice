import { createAction, props } from '@ngrx/store';
import { CommentsModel } from '../../shared/model/model';

export enum AppCommentsActions {
  commentsLoadSuccess = '[Comments] load comments  success',
  commentsLoad = '[Comments] load comments',
  commentsLoadFailure = '[Comments] load failure',
  navigateToComments = '[Comments] navigate to comments',

}

export const navigateToComments = createAction(AppCommentsActions.navigateToComments);

export const commentsLoad = createAction(AppCommentsActions.commentsLoad);

export const commentsLoadSuccess = createAction(
  AppCommentsActions.commentsLoadSuccess,
  props< { comments: CommentsModel[]} >()
);

export const commentsLoadFailure = createAction(
  AppCommentsActions.commentsLoadFailure,
  props< { error: string} >()
);

