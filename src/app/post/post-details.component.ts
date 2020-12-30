import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsModel, PostModel } from '../model/model';
import { Observable } from 'rxjs';
import { selectPostState } from './store/post-selector';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { postPreviewLoad } from './store/post-actions';
import { selectPostID } from '../store/router/router-selectors';
import { selectComments } from '../comments/store/app-comments.selectors';
import { commentsLoad } from '../comments/store/app-comments.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})

export class PostDetailsComponent implements OnInit{
  public comments$: Observable<CommentsModel[]> = this.store.select(selectComments);
  public post$: Observable<PostModel> = this.store.select(selectPostState);
  public readonly postId$: Observable<string> = this.store.select(selectPostID);

  postId: string;



  constructor(private store: Store<AppState>, private router: Router) {

  }


  public ngOnInit(): void {
    this.store.dispatch(postPreviewLoad());
    this.store.dispatch(commentsLoad({postId: this.postId}));

  }

  public navigateToComments(): Promise<boolean> {
    return this.router.navigate(['../posts/' + this.postId + '/comments']);
  }
}
