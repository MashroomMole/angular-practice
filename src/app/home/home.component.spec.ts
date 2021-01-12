import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/reducers';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HOME_PAGE_FEATURE_KEY, homePageInitialState } from './store/state';
import { HomeComponent } from './home.component';
import { postsLoad } from './store/home-page.actions';
import { Component, Input } from '@angular/core';

@Component({selector: 'app-post-thumbnail', template: ''})
class PostThumbnailComponent {
  @Input() postId: string;
}
describe('Home page component', () => {
  let component: HomeComponent;
  let store: MockStore<AppState>;

  beforeEach(
    async (() => {
    TestBed.configureTestingModule({
      providers: [
        HomeComponent,
        provideMockStore({
          initialState: {
            [HOME_PAGE_FEATURE_KEY]: homePageInitialState,
          },
        }),
      ],
    });
    component = TestBed.inject(HomeComponent);
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
  })
  );

  it('should dispatch load action', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(postsLoad());
  });
});
