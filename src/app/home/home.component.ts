import { Component, OnInit } from '@angular/core';
import { PostsModel } from '../shared/posts.model';
import { PostsService } from '../services/get-posts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectPosts } from '../post-thumbnail/post-details/store/post-selector';
import { postsLoad } from '../post-thumbnail/post-details/store/post-actions';
import { HomePageState } from '../post-thumbnail/post-details/store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostsModel[]>;
  constructor(private postService: PostsService, private router: Router, private store: Store<HomePageState>) { }

  public ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts);
    this.store.dispatch(postsLoad());
  }
}
