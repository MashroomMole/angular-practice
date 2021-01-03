import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { entriesLoad } from './store/guest-book.actions';
import { Observable } from 'rxjs';
import { EntryModel } from '../shared/model/model';
import { selectEntries } from './store/guest-book.selectors';
import { GuestBookFormComponent } from './guest-book-form/guest-book-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: []
})
export class GuestBookComponent implements OnInit {
  entries$: Observable<EntryModel[]>;
  hideDialog: boolean;
  disableButton: boolean;
  guestBookFormComponentRef: MatDialogRef<GuestBookFormComponent>;


  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.hideDialog = true;
    this.disableButton = false;

    this.store.dispatch(entriesLoad());
    this.entries$ = this.store.select(selectEntries);
  }

  public openDialog(): void {
    this.hideDialog = false;
    this.disableButton = true;
    this.guestBookFormComponentRef = this.dialog.open(
      GuestBookFormComponent, {
      hasBackdrop: false
    });
  }

  public handleSave(event: boolean): void {
    this.hideDialog = event;
    this.disableButton = false;
    this.dialog.closeAll();
  }
}
