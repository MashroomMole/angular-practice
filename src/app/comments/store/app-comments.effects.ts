import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { commentsLoad, commentsLoadFailure, commentsLoadSuccess } from './app-comments.actions';
import { PostCommentsState } from './state';
import { CommentsService } from '../../services/get-comments.service';

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
        // withLatestFrom(this.store.select(selectPostId)),
        mergeMap(() => this.commentsService.getComments()
          .pipe(
            map(comments => commentsLoadSuccess({ comments })),
            catchError(error => of(commentsLoadFailure({ error })))
          )
        )
      );
  });

  constructor(
    private actions$: Actions,
    private store: Store<PostCommentsState>,
    private commentsService: CommentsService,
  ) {}
}
