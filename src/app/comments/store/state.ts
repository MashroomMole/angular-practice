import { CommentsModel } from '../../shared/model';

export const POST_COMMENTS_FEATURE_KEY = 'POST_COMMENTS';

export interface PostCommentsState {
  postId: string;
  comments: Array<CommentsModel>;
}

export const postCommentsInitialState: PostCommentsState = {
  postId: null,
  comments: []
};

export interface CommentState {
  postId: string;
  id: string;
  name: string;
  body: string;
}

export const commentInitialState: CommentState = {
  postId: null,
  id: null,
  name: null,
  body: null
};
