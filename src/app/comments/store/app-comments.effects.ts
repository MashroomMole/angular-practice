import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { commentsLoadFailure, commentsLoadSuccess, navigateToComments } from './app-comments.actions';
import { AppState } from '../../store/reducers';
import { PostsService } from '../../shared/services/posts.service';
import { routerParamFlatMap } from '../../store/router/router-selectors';

/**
 * AppCommentsEffect - handles navigation to comments component
 */
@Injectable()
export class AppCommentsEffects {

  public navigateToComments$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(navigateToComments),
        withLatestFrom(this.store.select(routerParamFlatMap)),
        switchMap(([, routerParams]) => this.postsService.getComments(routerParams['id'])
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
    private postsService: PostsService,
  ) {}
}
