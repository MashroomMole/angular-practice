import { PostModel } from '../../shared/model';

export const HOME_PAGE_FEATURE_KEY = 'HOME_PAGE_STATE';

export interface HomePageState {
  posts: Array<PostModel>;
}

export const homePageInitialState: HomePageState = {
  posts: [],
};
