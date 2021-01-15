import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PostThumbnailComponent } from './post-thumbnail.component';
import { mockHomePageState, mockPost } from '../mocks/mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { routerParamFlatMap } from '../../store/router/router-selectors';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../store/reducers';

describe('Post thumbnail component', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  let component: PostThumbnailComponent;
  let router: Router;
  let store: MockStore<AppState>;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          provideMockStore({
            initialState: mockHomePageState(),

          }),
          PostThumbnailComponent,
          // { provide: Router, useValue: provideMockRouter() },
        ],
        imports: [RouterTestingModule]
      });
      component = TestBed.inject(PostThumbnailComponent);
      router = TestBed.inject(Router);
      store = TestBed.inject(MockStore);
    }
  );

  it('should trigger router navigation', () => {
    store.overrideSelector(routerParamFlatMap, {
      postId: '01',
    });
    // spyOn(router, 'navigateByUrl');

    // component.navigateToPost(mockPost.id);
    // expect(router.navigateByUrl).toHaveBeenCalledWith('../posts/' + mockPost.id);
    const expectedPath = '/post/' + mockPost.id;
    const [actualPath] = routerSpy.navigateByUrl;
    expect(actualPath).toBe(expectedPath);
    });
  });
