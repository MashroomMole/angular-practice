import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../shared/model/model';

export enum UserActions {
  userLoadSuccess = '[User] load user details success',
  userLoad = '[User] load user details',
  userLoadFailure = '[User] load user details failure'
}

export const userLoad = createAction(UserActions.userLoad);

export const userLoadSuccess = createAction(
  UserActions.userLoadSuccess,
  props< { user: UserModel} >()
);

export const userLoadFailure = createAction(
  UserActions.userLoadFailure,
  props< { error: string} >()
);
