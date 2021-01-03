import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PostsService } from '../../shared/services/get-posts.service';
import { postsLoad, postsLoadFailure, postsLoadSuccess } from './home-page.actions';
import { AppState } from '../../store/reducers';
import { selectRouterState } from '../../store/router/router-selectors';

/**
 * HomePageEffects - communicates with server via HTTP
 */
@Injectable()
export class HomePageEffects {
  /**
   * Loads first 5 posts for a Home page
   */
  public postsLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(postsLoad),
        withLatestFrom(this.store.select(selectRouterState)),
        filter(([, router]) => {
            return router.state.url === '/home';
          }
        ),
        switchMap(() => this.postsService.getFistFivePosts()
          .pipe(
            map(posts => postsLoadSuccess({ posts })),
            catchError(error => of(postsLoadFailure({ error })))
          )
        )
      );
  });

  /**
   * Loads all posts
   */
  public postsAllLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(postsLoad),
        withLatestFrom(this.store.select(selectRouterState)),
        filter(([, router]) => {
        return router.state.url === '/posts';
        }
        ),
        switchMap(() => this.postsService.getAllPosts()
          .pipe(
            map(posts => postsLoadSuccess({ posts })),
            catchError(error => of(postsLoadFailure({ error })))
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
