import { of, ReplaySubject } from 'rxjs';
import 'jasmine';
import { TestBed } from '@angular/core/testing';
import { HomePageEffects } from './home-page.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { selectUrl } from '../../store/router/router-selectors';
import { postsLoad, postsLoadSuccess } from './home-page.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockPostsResponse } from '../mocks/mocks';
import { AppState } from '../../store/reducers';
import { ApiService } from '../../shared/services/api-service';
import { first } from 'rxjs/operators';

describe('Home page effects', () => {
let service: ApiService;
let store: MockStore<AppState>;
let actions$: ReplaySubject<any>;
let effects$: HomePageEffects;


beforeEach(
  () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockActions(() => actions$),
        HomePageEffects,
        ApiService,
        provideMockRouter(),
        // mock the Store and the selectors that are used within the Effect
        provideMockStore({
          selectors: [
            {
              selector: selectUrl,
              value: '/home',
            },
          ],
        }),
      ],
    });
    store = TestBed.inject(MockStore);
    effects$ = TestBed.inject(HomePageEffects);
    actions$ = new ReplaySubject(1);
    service = TestBed.inject(ApiService);
  });

it(
  'should fetch 5 entries in home page',
   (done) =>  {
     spyOn(service, 'getFistFivePosts').and.returnValue(of(mockPostsResponse));
     effects$.postsLoad$.pipe(first()).subscribe((action) => {
      expect(action).toEqual(
        postsLoadSuccess({posts: mockPostsResponse}));
    });
     actions$.next(postsLoad());
     done();
   });

it('should fetch all entries in posts page',
  (done) => {
    spyOn(service, 'getAllPosts').and.returnValue(of(mockPostsResponse));

    store.overrideSelector(selectUrl, '/posts');
    store.refreshState();
    effects$.postsAllLoad$.pipe(first()).subscribe((action) => {
      expect(action).toEqual(
        postsLoadSuccess({posts: mockPostsResponse})
      );
      done();
  });
    actions$.next(postsLoad());
  });

// it('should catch error',
//     (done) => {
//       // spyOn(service, 'getFistFivePosts').and.throwError('some error');
//       effects$.postsLoad$.pipe(first()).subscribe((action) => {
//         expect(action).toEqual(
//           postsLoadFailure({error: 'some error'})
//         );
//         done();
//       });
//       actions$.next(postsLoad());
//     });
});
