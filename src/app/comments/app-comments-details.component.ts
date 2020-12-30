import { Component, OnInit } from '@angular/core';
import { CommentsModel } from '../model/model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { Observable } from 'rxjs';
import { selectComments } from './store/app-comments.selectors';
import { navigateToComments } from './store/app-comments.actions';

@Component({
  selector: 'app-comments-details',
  templateUrl: './app-comments-details.component.html'
})

export class AppCommentsDetailsComponent implements OnInit{

  comments$: Observable<CommentsModel[]>;

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.store.dispatch(navigateToComments());
    this.comments$ = this.store.select(selectComments);
  }


}
