import * as actions from './home-page.actions';
import { homePageReducers } from './home-page.reducers';
import { HomePageState } from './state';
import { mockPostsResponse } from '../mocks/mocks';

const getInitialHomePageState = (): HomePageState => ({
  loading: false,
  posts: [],
  error: '',
});

describe('Home page - store - reducer', () => {
  it('action postsLoad - should start loading', () => {
    expect(
      homePageReducers(
        getInitialHomePageState(),
        actions.postsLoad()
      ).loading
    ).toEqual(true);
  });

  it('action postsLoadSuccess - should add some data', () => {
    expect(
      homePageReducers(
        getInitialHomePageState(),
        actions.postsLoadSuccess({
          posts: mockPostsResponse,
        })
      ).posts
    ).toBeTruthy();
  });

  it('action loadPostsFailure - should set error', () => {
    expect(
      homePageReducers(
        getInitialHomePageState(),
        actions.postsLoadFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });
});
