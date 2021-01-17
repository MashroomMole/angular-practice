import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { entriesLoad } from './store/guest-book.actions';
import { forkJoin, Observable } from 'rxjs';
import { EntryModel, UserModel } from '../shared/model/model';
import { selectEntries, selectEntriesLoading } from './store/guest-book.selectors';
import { GuestBookDialogComponent } from './guest-book-dialog/guest-book-dialog.component';
import { UserComponent } from '../user/user.component';
import { selectUserState } from '../user/store/user.selectors';
import { userLoad } from '../user/store/user.actions';
import { UserState } from '../user/store/state';
import { GuestBookDialogService } from './guest-book-dialog-service/dialog-service';

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
  public user$: Observable<UserState>;
  public data: Observable<UserModel>;
  constructor(private store: Store<AppState>, private dialogService: GuestBookDialogService ) { }

  public ngOnInit(): void {

    this.disableButton = false;
    this.entries$ = this.store.select(selectEntries);
    this.store.dispatch(entriesLoad());
  }

  public openEntryDialog(): void {
    this.disableButton = true;
    this.dialogService.openDialog(
      this.store,
      GuestBookDialogComponent,
      'auto',
      '350px',
      false,
      false
    )
      .subscribe( () =>
      forkJoin( [
        this.store.dispatch(entriesLoad()),
        this.disableButton = !this.disableButton,
      ]
      ));
    }

  public openUserInfo(userId: string): void {
    this.store.dispatch(userLoad({id: userId}));
    this.user$ = this.store.select(selectUserState);

    this.dialogService.openDialog(
      this.store,
      UserComponent,
      '850px',
      '400px',
      true,
      true
    );
  }
}
