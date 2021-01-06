import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { createEntry, entriesLoad } from './store/guest-book.actions';
import { Observable } from 'rxjs';
import { EntryModel } from '../shared/model/model';
import { selectEntries, selectEntriesLoading } from './store/guest-book.selectors';
import { GuestBookDialogComponent } from './guest-book-dialog/guest-book-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {
  public entries$: Observable<EntryModel[]>;
  public loading$: Observable<boolean> = this.store.select(selectEntriesLoading);
  public disableButton: boolean;
  public guestBookFormComponentRef: MatDialogRef<GuestBookDialogComponent>;


  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  public ngOnInit(): void {

    this.disableButton = false;
    this.store.dispatch(entriesLoad());
    this.entries$ = this.store.select(selectEntries);
  }

  public openDialog(): void {
    this.disableButton = true;
    this.guestBookFormComponentRef = this.dialog.open(
      GuestBookDialogComponent, {
      hasBackdrop: false,
        width: 'auto',
        height: '350px',
        maxHeight: '100vh',
        maxWidth: '100vw'
      });
    this.guestBookFormComponentRef
      .afterClosed()
      .pipe(
        map(
       (result) => {
         if (result) {
           this.store.dispatch(createEntry({entry: result}));
         }
       }
        )
      )
      .subscribe(() => this.disableButton = !this.disableButton);
  }
}
