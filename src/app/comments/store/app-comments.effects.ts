import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { commentsLengthLoad, commentsLoad, commentsLoadFailure, commentsLoadSuccess } from './app-comments.actions';
import { CommentsService } from '../../services/get-comments.service';
import { selectRouterState } from '../../store/router/router-selectors';
import { AppState } from '../../store/reducers';

/**
 * AppComponentEffect - communicates with server via HTTP
 */
@Injectable()
export class AppCommentsEffects {
  /**
   * Loads comments for a post
   */
  public commentsLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(commentsLoad),
        withLatestFrom(this.store.select(selectRouterState)),
        switchMap(([ , routerParams]) => this.commentsService.getComments(routerParams['id'])
          .pipe(
            map(comments => commentsLoadSuccess({ comments })),
            catchError(error => of(commentsLoadFailure({ error })))
          )
        )
      );
  });

  public commentsLengthLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(commentsLengthLoad),
        withLatestFrom(this.store.select(selectRouterState)),
        switchMap(([ , routerParams]) => this.commentsService.getComments(routerParams['id'])
          .pipe(
            map(comments => commentsLoadSuccess({ comments })),
            catchError(error => of(commentsLoadFailure({ error })))
          )
        )
      );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private commentsService: CommentsService,
  ) {}
}
