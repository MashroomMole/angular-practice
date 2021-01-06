import { UserModel } from '../../shared/model/model';

export const USER_FEATURE_KEY = 'USER_STATE';


export interface UserState {
  model: UserModel;
  error: string;
}

export const userInitialState: UserState = {
  model: null,
  error: '',
};
