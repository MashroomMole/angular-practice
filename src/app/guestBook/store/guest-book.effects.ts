import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../../store/reducers';
import {
  createEntry,
  createEntryFailure,
  createEntrySuccess,
  entriesLoad,
  entriesLoadFailure,
  entriesLoadSuccess
} from './guest-book.actions';
import { GuestBookService } from '../../shared/services/entry.service';

/**
 * GuestBookEffects - communicates with server via HTTP
 */
@Injectable()
export class GuestBookEffects {

  /**
   * Loads Guest book entries
   */
  public entriesLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(entriesLoad),
        switchMap(() => this.guestBookService.getGuestBookEntries()
          .pipe(
            map(entries => entriesLoadSuccess({ entries })),
            catchError(error => of(entriesLoadFailure({ error })))
          )
        )
      );
  });

  /**
   * Handles create new entry
   */
  addEntry$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(createEntry),
        concatMap(action =>
          this.guestBookService.AddEntry(action.entry)
            .pipe(
              map(entry => createEntrySuccess({entry})),
              catchError(error => of(createEntryFailure({ error })))
        )
      ));
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private guestBookService: GuestBookService
  ) {}
}
