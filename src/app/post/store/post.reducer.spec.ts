import * as actions from './post.actions';
import { PostState } from './state';
import { postReducer } from './post.reducer';
import { mockPost } from '../../home/mocks/mocks';

const getInitialPostState = (): PostState => ({
  id: '',
  userId: '',
  body: '',
  title: '',
  comments: [],
  error: '',
});

describe('Post - store - reducer', () => {

  it('action postPreviewLoadSuccess - should add some data', () => {
    expect(
      postReducer(
        getInitialPostState(),
        actions.postDetailsLoadSuccess({
          post: mockPost,
        })
      ).id
    ).toBeTruthy();
  });

  it('action postPreviewLoadFailure - should set error', () => {
    expect(
      postReducer(
        getInitialPostState(),
        actions.postDetailsLoadFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });
});
