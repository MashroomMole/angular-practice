import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsService } from '../../shared/services/posts.service';
import { routerParamFlatMap } from '../../store/router/router-selectors';
import { of } from 'rxjs';
import { AppState } from '../../store/reducers';
import { commentsLoad, commentsLoadFailure, commentsLoadSuccess } from '../../comments/store/app-comments.actions';
import { postPreviewLoad, postPreviewLoadFailure, postPreviewLoadSuccess } from './post-actions';

/**
 * postPreviewEffects - communicates with server via HTTP
 */
@Injectable()
export class PostEffects {
  /**
   * Loads post details
   */
  public postPreviewLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
    ofType(postPreviewLoad),
    withLatestFrom(this.store.select(routerParamFlatMap)),
        switchMap(([, router]) => this.postsService.getPost(router['id'])
          .pipe(
            map(post => postPreviewLoadSuccess({ post })),
            catchError(error => of(postPreviewLoadFailure({ error })))
          )
        )
      );
  });
  /**
   * Loads comments for a post
   */
  public commentsLoad$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(commentsLoad),
        withLatestFrom(this.store.select(routerParamFlatMap)),
        switchMap(([ , routerParams]) => this.postsService.getComments(routerParams['id'])
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
