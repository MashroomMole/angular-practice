import { ServerResponse } from '../store/user.server.response';
import { AppState } from '../../store/reducers';
import { USER_FEATURE_KEY } from '../store/state';
import { UserModel } from '../../shared/model/model';

export const mockUserResponse: ServerResponse = {
  id: '10',
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: {
    street: 'Kattie Turnpike',
    suite: 'Suite 198',
    city: 'Lebsackbury',
    zipcode: '31428-2261',
    geo: {
      lat: '-38.2386',
      lng: '57.2232'
    }
  },
  phone: '024-648-3804',
  website: 'ambrose.net',
  company: {
    name: 'Hoeger LLC',
    catchPhrase: 'Centralized empowering task-force',
    bs: 'target end-to-end models'
  }
};
export const mockUserModel = (): UserModel => ({
  id: '10',
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  address: ['Lebsackbury', 'Kattie Turnpike', 'Suite 198', '31428-2261'],
  geo: ['-38.2386', '57.2232'],
  phone: '024-648-3804',
  website: 'ambrose.net',
  company: ['Hoeger LLC', 'target end-to-end models', 'Centralized empowering task-force']
});
export const mockUserState = (): AppState => ({
  [USER_FEATURE_KEY]: {
    model: mockUserModel(),
    error: ''
  }
});
