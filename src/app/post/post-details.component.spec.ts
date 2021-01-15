import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/reducers';
import { TestBed } from '@angular/core/testing';
import { POST_FEATURE_KEY, postInitialState } from './store/state';
import { PostDetailsComponent } from './post-details.component';
import { postDetailsLoad } from './store/post.actions';
import { commentsLoad } from '../comments/store/app-comments.actions';

describe('Post details component', () => {
  let component: PostDetailsComponent;
  let store: MockStore<AppState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostDetailsComponent,
        provideMockStore({
          initialState: {
            [POST_FEATURE_KEY]: postInitialState,
          },
        }),
      ],
    });
    component = TestBed.inject(PostDetailsComponent);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  });

  it('should dispatch postPreviewLoad and commentsLoad action', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(postDetailsLoad());
    expect(store.dispatch).toHaveBeenCalledWith(commentsLoad());
  });
});
