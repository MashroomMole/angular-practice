import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { commentsLoad } from './store/app-comments.actions';
import { Observable } from 'rxjs';
import { selectComments } from './store/app-comments.selectors';
import { CommentsModel } from '../shared/model';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-comments',
  templateUrl: './app-comments.component.html'
})

export class AppCommentsComponent implements OnInit {
  // @Input() public comments: CommentsModel[];
  @Input() public postId: string;
  @Output() public emit: EventEmitter<any>;

  constructor(private store: Store<AppState>) {

  }
  comments$: Observable<CommentsModel[]>;

  commentsForm: FormGroup;

  ngOnInit(): void {
    this.comments$ = this.store.select(selectComments);
    this.store.dispatch(commentsLoad());
    }
  }

