import { of, ReplaySubject } from 'rxjs';
import 'jasmine';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { routerParamFlatMap } from '../../store/router/router-selectors';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockCommentsResponse } from '../mocks/mocks';
import { AppState } from '../../store/reducers';
import { ApiService } from '../../shared/services/api-service';
import { first } from 'rxjs/operators';
import { AppCommentsEffects } from './app-comments.effects';
import { commentsLoadSuccess, navigateToComments } from './app-comments.actions';

describe('Home page effects', () => {
  let service: ApiService;
  let store: MockStore<AppState>;
  let actions$: ReplaySubject<any>;
  let effects$: AppCommentsEffects;


  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          provideMockActions(() => actions$),
          AppCommentsEffects,
          ApiService,
          provideMockRouter(),
          // mock the Store and the selectors that are used within the Effect
          provideMockStore({
            selectors: [
              {
                selector: routerParamFlatMap,
                value: '10',
              },
            ],
          })        ],
      });
      store = TestBed.inject(MockStore);
      effects$ = TestBed.inject(AppCommentsEffects);
      actions$ = new ReplaySubject(1);
      service = TestBed.inject(ApiService);
    });

  it(
    'should navigate to comments',
    (done) =>  {
      spyOn(service, 'getComments').and.returnValue(of(mockCommentsResponse));
      effects$.navigateToComments$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          commentsLoadSuccess({comments: mockCommentsResponse}));
      });
      actions$.next(navigateToComments());
      done();
    });
});
