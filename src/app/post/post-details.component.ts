import { Component, OnInit } from '@angular/core';
import { CommentsModel, PostModel } from '../shared/model/model';
import { Observable } from 'rxjs';
import { selectPostLoading, selectPostState } from './store/post.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { selectPostID } from '../store/router/router-selectors';
import { selectComments } from '../comments/store/app-comments.selectors';
import { commentsLoad } from '../comments/store/app-comments.actions';
import { postDetailsLoad } from './store/post.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})

export class PostDetailsComponent implements OnInit{
  public comments$: Observable<CommentsModel[]> = this.store.select(selectComments);
  public post$: Observable<PostModel> = this.store.select(selectPostState);
  public readonly postId$: Observable<string> = this.store.select(selectPostID);
  public readonly loading$: Observable<boolean> = this.store.select(selectPostLoading);


  constructor(private store: Store<AppState>) {
  }

  public ngOnInit(): void {
    this.store.dispatch(postDetailsLoad());
    this.store.dispatch(commentsLoad());
  }
}
