import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { HomePageState } from './state';
import { postsLoad, postsLoadFailure, postsLoadSuccess } from './post-actions';
import { PostsService } from '../../../services/get-posts.service';

/**
 * AppComponentEffect - communicates with server via HTTP
 */
@Injectable()
export class PostEffects {
  /**
   * Loads comments for a post
   */
  public postsLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(postsLoad),
        mergeMap(() => this.postsService.getPosts()
          .pipe(
            map(posts => postsLoadSuccess({ posts })),
            catchError(error => of(postsLoadFailure({ error })))
          )
        )
      );
  });

  constructor(
    private actions$: Actions,
    private store: Store<HomePageState>,
    private postsService: PostsService,
  ) {}
}