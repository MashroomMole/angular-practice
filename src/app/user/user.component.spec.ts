import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as selectors from './store/user.selectors';
import { selectUserState } from './store/user.selectors';
import { AppState } from '../store/reducers';
import { TestBed } from '@angular/core/testing';
import { USER_FEATURE_KEY } from './store/state';
import { UserComponent } from './user.component';
import { mockUserModel, mockUserState } from './mocks/mocks';
import { clearUserModel } from './store/user.actions';

describe('User component', () => {
  let component: UserComponent;
  let store: MockStore<AppState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserComponent,
        provideMockStore({
          selectors: [
            {
              selector: selectUserState,
              value: {
                model: mockUserModel(),
                error: '',
              },
            },
          ],
        }),
      ],
    });
    component = TestBed.inject(UserComponent);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should load user model and state', () => {
    component.ngOnInit();
    expect(selectors.selectUserModel(store)).toEqual(mockUserModel());
    expect(selectors.selectUserState(store)).toEqual(mockUserState()[USER_FEATURE_KEY]);
  });

  it('should dispatch clearUserModel on destroy', () => {
    component.ngOnDestroy();
    expect(store.dispatch).toHaveBeenCalledWith(clearUserModel());
  });
});
