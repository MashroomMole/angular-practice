import { CommentsModel } from '../../shared/model/model';

export const POST_FEATURE_KEY = 'POST_STATE';


export interface PostState {
  id: string;
  userId: string;
  title: string;
  body: string;
  comments: Array<CommentsModel>;
  error: string;
  loading: boolean;
}

export const postInitialState: PostState = {
  id: null,
  userId: null,
  title: null,
  body: null,
  comments: [],
  error: '',
  loading: false
};
