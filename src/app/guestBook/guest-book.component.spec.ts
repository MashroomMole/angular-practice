import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/reducers';
import { TestBed } from '@angular/core/testing';
import { GUEST_BOOK_FEATURE_KEY, guestBookInitialState } from './store/state';
import { GuestBookComponent } from './guest-book.component';
import { entriesLoad } from './store/guest-book.actions';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { GuestBookDialogService } from './guest-book-dialog-service/dialog-service';

describe('Guest book component', () => {
  const userId = '3';
  let component: GuestBookComponent;
  let store: MockStore<AppState>;
  let dialogService: GuestBookDialogService;
  let dialogialogSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestBookComponent],
      providers: [
        {provide: MatDialog, useValue: {}},
        GuestBookComponent,
        GuestBookDialogService,
        provideMockStore({
          initialState: {
            [GUEST_BOOK_FEATURE_KEY]: guestBookInitialState,
          },
        }),
      ],
    });
    component = TestBed.inject(GuestBookComponent);
    dialogService = TestBed.inject(GuestBookDialogService);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load action', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(entriesLoad());
  });

  it('should open new entry dialog', () => {
    dialogialogSpy = spyOn(dialogService, 'openDialog').and.returnValue(of());

    component.openEntryDialog();
    expect(dialogialogSpy).toHaveBeenCalled();
});

  it('should open user info dialog', () => {
    dialogialogSpy = spyOn(dialogService, 'openDialog');

    component.openUserInfo(userId);
    expect(dialogialogSpy).toHaveBeenCalled();
  });
});
