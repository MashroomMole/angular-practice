import * as actions from './app-comments.actions';
import { PostCommentsState } from './state';
import { mockCommentsResponse } from '../mocks/mocks';
import { commentsReducer } from './app-comments.reducer';

const getInitialCommentsState = (): PostCommentsState => ({
  comments: [],
  error: '',
});

describe('Comments - store - reducer', () => {

  it('action commentsLoadSuccess - should add some data', () => {
    expect(
      commentsReducer(
        getInitialCommentsState(),
        actions.commentsLoadSuccess({
          comments: mockCommentsResponse,
        })
      ).comments
    ).toBeTruthy();
  });

  it('action commentsLoadFailure - should set error', () => {
    expect(
      commentsReducer(
        getInitialCommentsState(),
        actions.commentsLoadFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });
});
