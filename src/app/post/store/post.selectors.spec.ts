import * as selectors from './post.selectors';
import { POST_FEATURE_KEY } from './state';
import { AppState } from '../../store/reducers';
import { mockPostState } from './mocks/mocks';

describe('Post - store - selectors', () => {
  const appState: AppState = mockPostState();
  const postState = appState[POST_FEATURE_KEY];

  it('selectPostState', () => {
    const expected = selectors.selectPostState(appState);
    expect(expected).toEqual(postState);
  });
});
