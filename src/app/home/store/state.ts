import { PostModel } from '../../shared/model/model';

export const HOME_PAGE_FEATURE_KEY = 'HOME_PAGE_STATE';

export interface HomePageState {
  posts: Array<PostModel>;
  error: string;
}

export const homePageInitialState: HomePageState = {
  posts: [],
  error: ''
};
