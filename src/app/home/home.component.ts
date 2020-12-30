import { Component, OnInit } from '@angular/core';
import { PostModel } from '../model/model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { postsLoad } from './store/home-page.actions';
import { selectPosts } from './store/home-page.selectors';
import { HomePageState } from './store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostModel[]>;
  constructor(private store: Store<HomePageState>) { }

  public ngOnInit(): void {
    this.store.dispatch(postsLoad());
    this.posts$ = this.store.select(selectPosts);
  }
}
