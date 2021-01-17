import * as selectors from './user.selectors';
import { USER_FEATURE_KEY } from './state';
import { AppState } from '../../store/reducers';
import { mockUserState } from '../mocks/mocks';

describe('User - store - selectors', () => {
  const appState: AppState = mockUserState();
  const userState = appState[USER_FEATURE_KEY];

  it('selectUserState', () => {
    const expected = selectors.selectUserState(appState);
    expect(expected).toEqual(userState);
  });

  it('selectUserModel', () => {
    const expected = selectors.selectUserModel(appState);
    expect(expected).toEqual(userState.model);
  });

  it('selectUserLoading', () => {
    const expected = selectors.selectUserLoading(appState);
    expect(expected).toEqual(userState.loading);
  });
});
