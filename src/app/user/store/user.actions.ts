import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../shared/model/model';

export enum UserActions {
  userLoadSuccess = '[User] load user details success',
  userLoad = '[User] load user details',
  userLoadFailure = '[User] load user details failure',
  userModelClear = '[User] clear state'
}

export const userLoad = createAction(UserActions.userLoad, props<{ id: string}>());

export const userLoadSuccess = createAction(
  UserActions.userLoadSuccess,
  props< { model: UserModel} >()
);

export const userLoadFailure = createAction(
  UserActions.userLoadFailure,
  props< { error: string} >()
);

export const clearUserModel = createAction(
  UserActions.userModelClear);
