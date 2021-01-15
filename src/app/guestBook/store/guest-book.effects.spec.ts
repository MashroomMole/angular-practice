import { of, ReplaySubject } from 'rxjs';
import 'jasmine';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { selectUrl } from '../../store/router/router-selectors';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from '../../store/reducers';
import { ApiService } from '../../shared/services/api-service';
import { first } from 'rxjs/operators';
import { GuestBookEffects } from './guest-book.effects';
import { mockPost, mockPostsResponse } from '../../home/mocks/mocks';
import { createEntry, createEntrySuccess, entriesLoad, entriesLoadSuccess } from './guest-book.actions';

describe('Guest book effects', () => {
  let service: ApiService;
  let store: MockStore<AppState>;
  let actions$: ReplaySubject<any>;
  let effects$: GuestBookEffects;


  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          provideMockActions(() => actions$),
          GuestBookEffects,
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
      effects$ = TestBed.inject(GuestBookEffects);
      actions$ = new ReplaySubject(1);
      service = TestBed.inject(ApiService);
    });

  it(
    'should load entries',
    (done) =>  {
      spyOn(service, 'getGuestBookEntries').and.returnValue(of(mockPostsResponse));
      effects$.entriesLoad$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          entriesLoadSuccess({entries: mockPostsResponse}));
      });
      actions$.next(entriesLoad());
      done();
    });

  it('should create entry',
    (done) => {
      spyOn(service, 'AddEntry').and.returnValue(of(mockPost));

      effects$.addEntry$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          createEntrySuccess({entry: mockPost})
        );
        done();
      });
      actions$.next(createEntry({entry: mockPost}));
    });
});
