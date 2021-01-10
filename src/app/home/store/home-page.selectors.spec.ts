import * as selectors from './home-page.selectors';
import { mockHomePageState } from '../mocks/mocks';
import { HOME_PAGE_FEATURE_KEY } from './state';
import { AppState } from '../../store/reducers';

describe('Home - store - selectors', () => {
  const appState: AppState = mockHomePageState();
  const homeState = appState[HOME_PAGE_FEATURE_KEY];

  it('selectHomePageState', () => {
    const expected = selectors.selectHomePageState(appState);
    expect(expected).toEqual(homeState);
  });

  it('selectPosts', () => {
    const expected = selectors.selectPosts(appState);
    expect(expected).toEqual(homeState.posts);
  });

  it('selectPostsLoading', () => {
    const expected = selectors.selectPostsLoading(appState);
    expect(expected).toEqual(homeState.loading);
  });
});
