import * as actions from './user.actions';
import { UserState } from './state';
import { mockUserModel } from '../mocks/mocks';
import { userReducer } from './user.reducer';

const getInitialUserState = (): UserState => ({
  model: null,
  loading: false,
  error: '',
});

describe('User - store - reducer', () => {
  it('action userLoad - should set loading', () => {
    expect(
      userReducer(
        getInitialUserState(),
        actions.userLoad({
          id: mockUserModel().id,
        })
      ).loading
    ).toBeTruthy();
  });

  it('action userLoadSuccess - should add some data', () => {
    expect(
      userReducer(
        getInitialUserState(),
        actions.userLoadSuccess({
          model: mockUserModel(),
        })
      ).model
    ).toBeTruthy();
  });

  it('action userLoadFailure - should set error', () => {
    expect(
      userReducer(
        getInitialUserState(),
        actions.userLoadFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });

  it('action clearUserModel - should clear state', () => {
    expect(
      userReducer(
        getInitialUserState(),
        actions.clearUserModel()
      ).model
    ).toBeFalsy();
  });
});
