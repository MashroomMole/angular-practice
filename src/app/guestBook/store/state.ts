import { EntryModel } from '../../shared/model/model';

export const GUEST_BOOK_FEATURE_KEY = 'GUEST_BOOK_STATE';

export interface GuestBookState {
  entries: Array<EntryModel>;
  error: string;
  loading: boolean;
}

export const guestBookInitialState: GuestBookState = {
  entries: [],
  error: '',
  loading: false
};


export interface EntryState {
  id: string;
  userId: string;
  body: string;
  title: string;
  error: string;
}

export const entryInitialState: EntryState = {
  id: null,
  userId: null,
  body: null,
  title: null,
  error: ''
};
