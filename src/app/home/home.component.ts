import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/model/model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { postsLoad } from './store/home-page.actions';
import { selectPosts, selectPostsLoading } from './store/home-page.selectors';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/**
 * HomeComponent renders home screen
 */
export class HomeComponent implements OnInit {
  public posts$: Observable<PostModel[]>;
  public loading$: Observable<boolean> = this.store.select(selectPostsLoading);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(postsLoad());
    this.posts$ = this.store.select(selectPosts);
  }
}
