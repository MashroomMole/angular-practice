import { PostsModel } from '../../../shared/posts.model';

export const POST_FEATURE_KEY = 'POST_STATE';

export interface HomePageState {
  model: Array<PostsModel>;
  loading: boolean;
}

export const homePageInitialState: HomePageState = {
  model: [],
  loading: false
};

export interface PostState {
  postId: string;
  userId: string;
  title: string;
  body: string;
  comments: [];
}

export const postInitialState: PostState = {
  postId: null,
  userId: null,
  title: null,
  body: null,
  comments: []
};
