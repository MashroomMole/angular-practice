export interface HomePageModel {
 posts: Array<PostModel>;
}

export interface PostModel {
  id: string;
  userId: string;
  title: string;
  body: string;
  comments: Array<CommentsModel>;
}

export interface CommentsModel {
  postId: string;
  commentId: string;
  name: string;
  email: string;
  body: string;
}

export interface GuestBookModel {
  entries: Array<EntryModel>;
}

export interface EntryModel {
  id: string;
  userId: string;
  title: string;
  body: string;
}
