import { createAction, props } from '@ngrx/store';
import { EntryModel } from '../../shared/model/model';

export enum GuestBookActions {
  entriesLoadSuccess = '[GuestBook] load entries success',
  entriesLoad = '[GuestBook] load entries',
  entriesLoadFailure = '[GuestBook] entries failure',
  createEntry = '[GuestBook] add entry',
  createEntrySuccess = '[GuestBook] add entry success',
  createEntryFailure = '[GuestBook] add entry failure',
}

export const entriesLoad = createAction(GuestBookActions.entriesLoad);

export const entriesLoadSuccess = createAction(
  GuestBookActions.entriesLoadSuccess,
  props< { entries: Array<EntryModel>} >()
);

export const entriesLoadFailure = createAction(
  GuestBookActions.entriesLoadFailure,
  props< { error: string} >()
);

export const createEntry = createAction(GuestBookActions.createEntry,
  props<{ entry: EntryModel}>());

export const createEntrySuccess = createAction(GuestBookActions.createEntrySuccess,
  props<{ entry: EntryModel}>());

export const createEntryFailure = createAction(GuestBookActions.createEntryFailure,
  props<{ error: string }>()
);

