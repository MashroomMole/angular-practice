import { Action, createReducer, on } from '@ngrx/store';
import { userInitialState, UserState } from './state';
import { clearUserModel, userLoad, userLoadFailure, userLoadSuccess } from './user.actions';


// tslint:disable-next-line:variable-name
const _reducer = createReducer(
  userInitialState,
  on(userLoad,
    (state): UserState => {
      return {
        ...state,
        loading: true
      };
    }),
  on(
    userLoadSuccess,
    (state, action): UserState => {
      return {
        ...state,
        model: action.model,
        loading: false
      };
    }
  ),
  on(userLoadFailure, (state, action): UserState => {
    return {
      ...state,
      model: null,
      loading: false,
      error: action.error,
    };
  }),
  on(clearUserModel, () => ({ ...userInitialState }))
);

// tslint:disable-next-line:typedef
export function userReducer(state: UserState | undefined, action: Action) {
  return _reducer(state, action);
}
