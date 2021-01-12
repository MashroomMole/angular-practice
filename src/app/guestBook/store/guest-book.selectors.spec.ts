import * as selectors from './guest-book.selectors';
import { GUEST_BOOK_FEATURE_KEY } from './state';
import { AppState } from '../../store/reducers';
import { mockGuestBookState } from '../mocks/mocks';

describe('GuestBook - store - selectors', () => {
  const appState: AppState = mockGuestBookState();
  const guestBookState = appState[GUEST_BOOK_FEATURE_KEY];

  it('selectGuestBookState', () => {
    const expected = selectors.selectGuestBookState(appState);
    expect(expected).toEqual(guestBookState);
  });

  it('selectEntries', () => {
    const expected = selectors.selectEntries(appState);
    expect(expected).toEqual(guestBookState.entries);
  });

  it('selectEntriesLoading', () => {
    const expected = selectors.selectEntriesLoading(appState);
    expect(expected).toEqual(guestBookState.loading);
  });
});
