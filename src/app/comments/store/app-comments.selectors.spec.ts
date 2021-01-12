import * as selectors from './app-comments.selectors';
import { POST_COMMENTS_FEATURE_KEY } from './state';
import { AppState } from '../../store/reducers';
import { mockCommentsState } from '../mocks/mocks';

describe('Comments - store - selectors', () => {
  const appState: AppState = mockCommentsState();
  const commentsState = appState[POST_COMMENTS_FEATURE_KEY];

  it('selectHomePageState', () => {
    const expected = selectors.selectCommentsState(appState);
    expect(expected).toEqual(commentsState);
  });

  it('selectComments', () => {
    const expected = selectors.selectComments(appState);
    expect(expected).toEqual(commentsState.comments);
  });
});
