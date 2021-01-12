import { EntryModel } from '../../shared/model/model';
import { GUEST_BOOK_FEATURE_KEY } from '../store/state';
import { AppState } from '../../store/reducers';

export const mockEntriesResponse: EntryModel[] = [
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

export const mockGuestBookState = (): AppState => ({
  [GUEST_BOOK_FEATURE_KEY]: {
    entries: mockEntriesResponse,
    loading: true,
    error: ''
  }
});
