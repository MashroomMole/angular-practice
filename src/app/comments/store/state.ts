import { CommentsModel } from '../../shared/model/model';

export const POST_COMMENTS_FEATURE_KEY = 'POST_COMMENTS';

export interface PostCommentsState {
  comments: Array<CommentsModel>;
  error: string;
}

export const postCommentsInitialState: PostCommentsState = {
  comments: [],
  error: ''
};

export interface CommentState {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export const commentInitialState: CommentState = {
  postId: null,
  id: null,
  name: null,
  email: null,
  body: null
};
