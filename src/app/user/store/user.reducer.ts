// import { Action, createReducer, on } from '@ngrx/store';
// import { userInitialState, UserState } from './state';
// import { userLoad, userLoadSuccess } from './user.actions';
//
//
// // tslint:disable-next-line:variable-name
// const _reducer = createReducer(
//   userInitialState,
//   on(userLoad),
//   on(
//     userLoadSuccess,
//     (state, action): UserState => {
//       return {
//         ...state,
//        model: action..
//       };
//     }
//   )
// );
//
// // tslint:disable-next-line:typedef
// export function userReducer(state: UserState | undefined, action: Action) {
//   return _reducer(state, action);
// }
