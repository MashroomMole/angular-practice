export interface HomePageModel {
 posts: Array<PostModel>;
}

export interface PostModel {
  id: string;
  userId: string;
  title: string;
  body: string;
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

export interface UserModel {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Array<string>;
  phone: string;
  website: string;
  company: Array<string>;
}
