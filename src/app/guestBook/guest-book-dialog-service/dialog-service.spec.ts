import { TestBed } from '@angular/core/testing';
import { GuestBookDialogService } from './dialog-service';
import { mockUserModel, mockUserState } from '../../user/mocks/mocks';
import { AppState } from '../../store/reducers';
import { GuestBookDialogComponent } from '../guest-book-dialog/guest-book-dialog.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectUserModel, selectUserState } from '../../user/store/user.selectors';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('dialogService', () => {
  let service: GuestBookDialogService;
  let dialogComponent: GuestBookDialogComponent;
  let store: MockStore<AppState>;
  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({})});
  const mockDialogRef = {
    close: jasmine.createSpy('open')
  };

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [MatDialogModule],
        providers: [
          GuestBookDialogComponent,
          MatDialog,
          {provide: MatDialogRef, useValue: {mockDialogRef}},
          FormBuilder,
          GuestBookDialogService,
          provideMockStore({
            selectors: [
              {
                selector: selectUserModel,
                value: mockUserModel(),
              },
              {
                selector: selectUserState,
                value: mockUserState()
              }
            ]
          })
        ]
      });

      service = TestBed.inject(GuestBookDialogService);
      dialogComponent = TestBed.inject(GuestBookDialogComponent);
      store = TestBed.inject(MockStore);
      dialogSpy = spyOn(TestBed.inject(MatDialog), 'open');

    });

  it('should open dialog', () => {
    service = TestBed.inject(GuestBookDialogService);
    dialogComponent = TestBed.inject(GuestBookDialogComponent);
    store = TestBed.inject(MockStore);
    service.openDialog(
      store,
      dialogComponent,
      'x',
      'y',
      true,
      false);
    expect(dialogSpy).toHaveBeenCalled();
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
