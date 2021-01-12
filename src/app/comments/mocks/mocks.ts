import { CommentsModel } from '../../shared/model/model';
import { AppState } from '../../store/reducers';
import { POST_COMMENTS_FEATURE_KEY } from '../store/state';

export const mockCommentsResponse: CommentsModel[] = [
      {
        postId: '1',
        commentId: '1',
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est ccusantium'
      },
      {
        postId: '1',
        commentId: '2',
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      },
      {
        postId: '1',
        commentId: '3',
        name: 'odio adipisci rerum aut animi',
        email: 'Nikita@garfield.biz',
        body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
      },
      {
        postId: '1',
        commentId: '4',
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
      },
    ];

export const mockCommentsState = (): AppState => ({
  [POST_COMMENTS_FEATURE_KEY]: {
    comments: mockCommentsResponse,
    error: ''
  }
});
