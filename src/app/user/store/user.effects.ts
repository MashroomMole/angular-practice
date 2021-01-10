import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../../store/reducers';
import { userLoad, userLoadFailure, userLoadSuccess } from './user.actions';
import { ApiService } from '../../shared/services/api-service';

/**
 * userEffects - communicates with server via HTTP
 */
@Injectable()
export class UserEffects {
  /**
   * Loads user details
   */
  public userDetailsLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(userLoad),
        switchMap((action) =>
          this.userService.getUserDetails(action.id).pipe(
            map(( (model) => userLoadSuccess({model})),
              catchError(error => of(userLoadFailure({error})))
            )
          )
        )
      );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private userService: ApiService,
  ) {}

}
