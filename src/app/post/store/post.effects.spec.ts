import { of, ReplaySubject } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { selectPostID } from '../../store/router/router-selectors';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from '../../store/reducers';
import { ApiService } from '../../shared/services/api-service';
import { first } from 'rxjs/operators';
import { PostEffects } from './post.effects';
import { mockPost } from '../../home/mocks/mocks';
import { postDetailsLoad, postDetailsLoadFailure, postDetailsLoadSuccess } from './post.actions';
import { mockCommentsResponse } from '../../comments/mocks/mocks';
import { commentsLoad, commentsLoadSuccess } from '../../comments/store/app-comments.actions';

describe('Post preview effects', () => {
  let service: ApiService;
  let store: MockStore<AppState>;
  let actions$: ReplaySubject<any>;
  let effects$: PostEffects;


  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          provideMockActions(() => actions$),
          PostEffects,
          ApiService,
          provideMockRouter(),
          // mock the Store and the selectors that are used within the Effect
          provideMockStore({
            selectors: [
              {
                selector: selectPostID,
                value: '5',
              },
            ],
          }),
        ],
      });
      store = TestBed.inject(MockStore);
      effects$ = TestBed.inject(PostEffects);
      actions$ = new ReplaySubject(1);
      service = TestBed.inject(ApiService);
    });

  it(
    'should load post details',
    (done) =>  {
      spyOn(service, 'getPost').and.returnValue(of(mockPost));
      effects$.postPreviewLoad$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          postDetailsLoadSuccess({post: mockPost}));
      });
      expect(mockPost.id).toEqual('5');
      actions$.next(postDetailsLoad());
      done();
    });

  it('should load comments for a post',
    (done) => {
      spyOn(service, 'getComments').and.returnValue(of(mockCommentsResponse));

      effects$.commentsLoad$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          commentsLoadSuccess({comments: mockCommentsResponse})
        );
        done();
      });
      actions$.next(commentsLoad());
    });
});
