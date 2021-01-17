import { TestBed } from '@angular/core/testing';
import { GuestBookDialogService } from './dialog-service';
import { AppState } from '../../store/reducers';
import { GuestBookDialogComponent } from '../guest-book-dialog/guest-book-dialog.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { createEntry } from '../store/guest-book.actions';
import { EntryModel } from '../../shared/model/model';

describe('dialogService', () => {
  let result;

  const getMockDialogRef = () =>
    ({
      afterClosed: jasmine.createSpy().and.returnValue(of({result})),
    });

  const getMockDialog = () =>
    ({
      open: jasmine.createSpy().and.returnValue(getMockDialogRef()),
    });



  let store: MockStore<AppState>;
  let service: GuestBookDialogService;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule],
        providers: [
          {
            provide: MockStore,
            useValue: provideMockStore()
          },
          {
            provide: MatDialog,
            useValue: getMockDialog()
          },
          {
            provide: MatDialogRef,
            useValue: getMockDialogRef()
          },

          GuestBookDialogService,
        ]
      });
      service = TestBed.inject(GuestBookDialogService);
      store = TestBed.inject(MockStore);
    });

  it('should handle new entry creation', () => {
    result = {
      body: 'dsfdsfsdf',
      id: '',
      title: '',
      userId: 'sads@dsf'
    };
    service.openDialog(
      store,
      GuestBookDialogComponent)
      .subscribe(() => {
        expect(store.dispatch).toHaveBeenCalledWith(createEntry({entry: result}));
      });
  });
});
