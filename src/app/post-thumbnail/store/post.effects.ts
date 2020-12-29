import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { postLoadFailure, postPreviewLoad, postPreviewLoadSuccess } from './post-actions';
import { PostsService } from '../../services/get-posts.service';
import { AppState } from '../../store/reducers';
import { routerParamFlatMap } from '../../store/router/router-selectors';

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
            catchError(error => of(postLoadFailure({ error })))
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
