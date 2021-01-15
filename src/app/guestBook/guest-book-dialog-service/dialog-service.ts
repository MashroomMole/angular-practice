import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createEntry } from '../store/guest-book.actions';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuestBookDialogService {

  constructor(private dialog: MatDialog) {}

  public openDialog(
    store: Store<AppState>,
    component: any,
    width: string,
    height: string,
    hasBackdrop: boolean,
    closeOnNavigation: boolean
  ): Observable<void> {
    let entryDialogRef: MatDialogRef<any>;
    entryDialogRef = this.dialog.open(
      component, {
        hasBackdrop,
        closeOnNavigation,
        width,
        height,
        maxHeight: '100vh',
        maxWidth: '100vw'
      });
    return entryDialogRef
      .afterClosed()
      .pipe(
        map(
          (result) => {
            if (result) {
              store.dispatch(createEntry({entry: result}));
            }
          }
        )
      );
  }
}
