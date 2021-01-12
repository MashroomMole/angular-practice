import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/reducers';
import { TestBed } from '@angular/core/testing';
import { POST_COMMENTS_FEATURE_KEY, postCommentsInitialState } from './store/state';
import { AppCommentsDetailsComponent } from './app-comments-details.component';
import { navigateToComments } from './store/app-comments.actions';

describe('Home page component', () => {
  let component: AppCommentsDetailsComponent;
  let store: MockStore<AppState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppCommentsDetailsComponent,
        provideMockStore({
          initialState: {
            [POST_COMMENTS_FEATURE_KEY]: postCommentsInitialState,
          },
        }),
      ],
    });
    component = TestBed.inject(AppCommentsDetailsComponent);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should dispatch navigate to comments action', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(navigateToComments());
  });
});
