import { PostModel } from '../../shared/model/model';
import { HOME_PAGE_FEATURE_KEY } from '../store/state';
import { AppState } from '../../store/reducers';

export const mockPostsResponse: PostModel[] = [
  {
  userId: '1',
  id: '1',
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
},
  {
    userId: '2',
    id: '3',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  }
];

export const mockHomePageState = (): AppState => ({
  [HOME_PAGE_FEATURE_KEY]: {
    posts: mockPostsResponse,
    loading: true,
    error: ''
  }
});
