import { AppState } from '../../../store/reducers';
import { POST_FEATURE_KEY } from '../state';
import { mockCommentsResponse } from '../../../comments/mocks/mocks';

export const mockPostState = (): AppState => ({
  [POST_FEATURE_KEY]: {
    id: '45',
    title: 'a',
    body: 'post body',
    userId: '23',
    comments: mockCommentsResponse,
    error: '',
    loading: false
  }
});
