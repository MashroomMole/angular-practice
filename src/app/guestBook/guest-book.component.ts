import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { createEntry, entriesLoad } from './store/guest-book.actions';
import { Observable } from 'rxjs';
import { EntryModel, UserModel } from '../shared/model/model';
import { selectEntries, selectEntriesLoading } from './store/guest-book.selectors';
import { GuestBookDialogComponent } from './guest-book-dialog/guest-book-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { UserComponent } from '../user/user.component';
import { selectUserState } from '../user/store/user.selectors';
import { userLoad } from '../user/store/user.actions';
import { UserState } from '../user/store/state';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
/**
 * GuestBookComponent renders guest book main page,
 * manages GuestBookDialog and UserComponent state
 */
export class GuestBookComponent implements OnInit {
  public entries$: Observable<EntryModel[]>;
  public loading$: Observable<boolean> = this.store.select(selectEntriesLoading);
  public disableButton: boolean;
  public entryDialogRef: MatDialogRef<GuestBookDialogComponent>;
  public userDialogRef: MatDialogRef<UserComponent>;
  public user$: Observable<UserState>;
  public data: Observable<UserModel>;
  constructor(private store: Store<AppState>, private dialog: MatDialog, ) { }

  public ngOnInit(): void {

    this.disableButton = false;
    this.store.dispatch(entriesLoad());
    this.entries$ = this.store.select(selectEntries);
  }

  public openDialog(): void {
    this.disableButton = true;
    this.entryDialogRef = this.dialog.open(
      GuestBookDialogComponent, {
      hasBackdrop: false,
        width: 'auto',
        height: '350px',
        maxHeight: '100vh',
        maxWidth: '100vw'
      });
    this.entryDialogRef
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

  public openUserInfo(userId: string): void {
    this.store.dispatch(userLoad({id: userId}));
    this.user$ = this.store.select(selectUserState);

    this.userDialogRef = this.dialog.open(UserComponent, {
        hasBackdrop: true,
        closeOnNavigation: true,
        width: '500px',
        height: '600px',
        maxHeight: '100vh',
        maxWidth: '100vw',
      });
    this.userDialogRef.afterClosed();
  }


}
