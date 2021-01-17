import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/reducers';
import { TestBed } from '@angular/core/testing';
import { GUEST_BOOK_FEATURE_KEY, guestBookInitialState } from './store/state';
import { GuestBookComponent } from './guest-book.component';
import { entriesLoad } from './store/guest-book.actions';
import { GuestBookDialogService } from './guest-book-dialog-service/dialog-service';

describe('Guest book component', () => {
  let component: GuestBookComponent;
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuestBookComponent,
        GuestBookDialogService,
        {provide: GuestBookDialogService, useValue: {
            openDialog: jasmine.createSpy('GuestBookDialogService.openDialog'),
          }},
        provideMockStore({
          initialState: {
            [GUEST_BOOK_FEATURE_KEY]: guestBookInitialState,
          },
        }),
      ],
    });
    component = TestBed.inject(GuestBookComponent);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load action', () => {
    component.ngOnInit();
    component.openUserInfo('3');
    expect(store.dispatch).toHaveBeenCalledWith(entriesLoad());
  });
});
