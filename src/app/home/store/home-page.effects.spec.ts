import { of, ReplaySubject } from 'rxjs';
import 'jasmine';
import { async, TestBed, tick } from '@angular/core/testing';
import { HomePageEffects } from './home-page.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { selectUrl } from '../../store/router/router-selectors';
import { postsLoad, postsLoadSuccess } from './home-page.actions';
import { PostsService } from '../../shared/services/posts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockPostsResponse } from '../mocks/mocks';
import { AppState } from '../../store/reducers';

describe('Home page effects', () => {
let service: PostsService;
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
        PostsService,
        HttpClientTestingModule,
        provideMockRouter(),
        // provideMockActions(() => actions$),
        // mock the Store and the selectors that are used within the Effect
        provideMockStore({
          selectors: [
            {
              selector: selectUrl,
              value: {
                url: '/home',
              },
            },
          ],
        }),
      ],
    });
    service = TestBed.inject(PostsService);
    store = TestBed.inject(MockStore);
    effects$ = TestBed.inject(HomePageEffects);
    actions$ = new ReplaySubject(1);

});

it(
  'should fetch 5 entries in home page',
   async(() =>  {

    // const spy =
    // const spy1 = spyOn(service, 'getAllPosts');

    // const spy1 = createSpy('postsLoad');
     spyOn(service, 'getFistFivePosts').and.returnValue(of(mockPostsResponse));

     actions$.next(postsLoad());

     effects$.postsLoad$.subscribe((action) => {
      // const posts = service.getFistFivePosts().pipe(toArray()).toPromise();
      // expect(posts).toEqual(jasmine.objectContaining({posts: []}));

       tick(200);


       expect(action).toEqual(postsLoadSuccess({posts: mockPostsResponse}));



    });



  }));

// it('should fetch all entries in posts page', () => {
//   spyOn(service, 'getAllPosts').and.returnValue(of(mockPostsResponse));
//   store.overrideSelector(selectUrl, {
//      url: '/posts',
//     });
//   store.refreshState();
//
//   effects$.postsAllLoad$.pipe(first()).subscribe((action) => {
//       expect(action).toEqual(
//         postsLoadSuccess({posts: mockPostsResponse})
//       );
//     });
//   actions$.next(postsLoad());
//   });
//
// it(' postsAllLoad$ should not fetch entries on home page', () => {
//     const spy = createSpy('getAllPosts');
//
//     effects$.postsAllLoad$.pipe(first()).subscribe(() => {
//       expect(spy).not.toHaveBeenCalled();
//     });
//     actions$.next(postsLoad());
//   });
//
// it('postsLoad$ should not fetch entries on posts page', () => {
//     const spy = createSpy('getFistFivePosts');
//     store.overrideSelector(selectUrl, {
//       url: '/posts',
//     });
//     store.refreshState();
//
//     effects$.postsLoad$.pipe(first()).subscribe(() => {
//       expect(spy).not.toHaveBeenCalled();
//     });
//     actions$.next(postsLoad());
//   });
});
