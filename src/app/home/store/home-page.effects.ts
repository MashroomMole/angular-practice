import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PostsService } from '../../services/get-posts.service';
import { postsLoad, postsLoadFailure, postsLoadSuccess } from './home-page.actions';
import { AppState } from '../../store/reducers';

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
        switchMap(() => this.postsService.getFistFivePosts()
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
