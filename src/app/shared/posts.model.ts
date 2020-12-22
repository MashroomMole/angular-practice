export interface HomePageModel {
 model: Array<PostsModel>;
}

export interface PostsModel {
  postId: string;
  userId: string;
  title: string;
  body: string;
  comments: Array<CommentsModel>;
}

export interface CommentsModel {
  commentId: string;
  name: string;
  email: string;
  commentBody: string;
}
