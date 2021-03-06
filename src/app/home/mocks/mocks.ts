import { PostModel } from '../../shared/model/model';
import { HOME_PAGE_FEATURE_KEY } from '../store/state';
import { AppState } from '../../store/reducers';

export const mockPost: PostModel = Object.freeze({
  userId: '3',
  id: '5',
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae con'
});

export const mockPostsResponse: PostModel[] = [
  {
  userId: '1',
  id: '1',
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
},
  {
    userId: '2',
    id: '2',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '6',
    id: '3',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '2',
    id: '4',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '2',
    id: '5',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  }
];

export const mockAllPostsResponse: PostModel[] = [
  {
    userId: '1',
    id: '1',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: '2',
    id: '2',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '6',
    id: '3',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '2',
    id: '4',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '2',
    id: '5',
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit mole'
  },
  {
    userId: '2',
    id: '6',
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
