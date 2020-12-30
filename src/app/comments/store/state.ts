import { CommentsModel } from '../../model/model';

export const POST_COMMENTS_FEATURE_KEY = 'POST_COMMENTS';

export interface PostCommentsState {
  comments: Array<CommentsModel>;
}

export const postCommentsInitialState: PostCommentsState = {
  comments: []
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
