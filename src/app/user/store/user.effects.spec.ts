import { of, ReplaySubject } from 'rxjs';
import 'jasmine';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockUserModel, mockUserResponse } from '../mocks/mocks';
import { AppState } from '../../store/reducers';
import { ApiService } from '../../shared/services/api-service';
import { first } from 'rxjs/operators';
import { UserEffects } from './user.effects';
import { userLoad, userLoadSuccess } from './user.actions';
import { UserAdapter } from './user.adapter';

describe('User popup effects', () => {
  let service: ApiService;
  let store: MockStore<AppState>;
  let actions$: ReplaySubject<any>;
  let effects$: UserEffects;


  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          provideMockActions(() => actions$),
          UserEffects,
          ApiService,
          // mock the Store and the selectors that are used within the Effect
          provideMockStore({
            selectors: [
              {
                selector: '',
                value: '',
              },
            ],
          }),
        ],
      });
      store = TestBed.inject(MockStore);
      effects$ = TestBed.inject(UserEffects);
      actions$ = new ReplaySubject(1);
      service = TestBed.inject(ApiService);
    });

  it(
    'should load user details',
    (done) =>  {
      const adaptedResponse = UserAdapter.adapter(mockUserResponse);
      spyOn(service, 'getUserDetails').and.returnValue(of(adaptedResponse));
      effects$.userDetailsLoad$.pipe(first()).subscribe((action) => {
        expect(action).toEqual(
          userLoadSuccess({model: mockUserModel()}));
      });
      actions$.next(userLoad({id: '5'}));
      done();
    });
});
