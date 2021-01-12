import { Component, OnInit } from '@angular/core';
import { CommentsModel } from '../shared/model/model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { Observable } from 'rxjs';
import { selectComments } from './store/app-comments.selectors';
import { navigateToComments } from './store/app-comments.actions';

@Component({
  selector: 'app-comments-details',
  templateUrl: './app-comments-details.component.html'
})

/**
 * AppCommentsDetails renders comments screen,
 * manages comments state
 */
export class AppCommentsDetailsComponent implements OnInit{
  comments$: Observable<CommentsModel[]>;
  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(navigateToComments());
    this.comments$ = this.store.select(selectComments);
  }
}

