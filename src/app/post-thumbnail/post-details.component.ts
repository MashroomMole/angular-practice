import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsModel, PostModel } from '../shared/model';
import { Observable } from 'rxjs';
import { selectPostState } from './store/post-selector';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { postPreviewLoad } from './store/post-actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})

export class PostDetailsComponent implements OnInit{
  public comments: CommentsModel[];
  public post$: Observable<PostModel> = this.store.select(selectPostState);


  constructor(private store: Store<AppState>, private router: Router) {

  }


  public ngOnInit(): void {
    this.store.dispatch(postPreviewLoad());
  }

  public navigateToComments(postId: string): Promise<boolean> {
    return this.router.navigate(['../posts/' + postId + '/comments']);

  }
}
