import * as actions from './guest-book.actions';
import { GuestBookState } from './state';
import { mockEntriesResponse } from '../mocks/mocks';
import { guestBookReducers } from './guest-book.reducers';

const getInitialGuestBookState = (): GuestBookState => ({
  loading: false,
  entries: [],
  error: '',
});

describe('GuestBook - store - reducer', () => {
  it('action entriesLoad - should start loading', () => {
    expect(
      guestBookReducers(
        getInitialGuestBookState(),
        actions.entriesLoad()
      ).loading
    ).toEqual(true);
  });

  it('action entriesLoadSuccess - should add some data', () => {
    expect(
      guestBookReducers(
        getInitialGuestBookState(),
        actions.entriesLoadSuccess({
          entries: mockEntriesResponse,
        })
      ).entries
    ).toBeTruthy();
  });

  it('action entriesLoadFailure - should set error', () => {
    expect(
      guestBookReducers(
        getInitialGuestBookState(),
        actions.entriesLoadFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });

  it('action createEntryFailure - should set error', () => {
    expect(
      guestBookReducers(
        getInitialGuestBookState(),
        actions.createEntryFailure({
          error: 'Some error'
        })
      ).error
    ).toBeTruthy();
  });
});
