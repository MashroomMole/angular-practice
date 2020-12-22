import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsModel } from '../shared/posts.model';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostCommentsState } from './store/state';
import { commentsLoad } from './store/app-comments.actions';
import { Observable } from 'rxjs';
import { selectComments } from './store/app-comments.selectors';

@Component({
  selector: 'app-comments',
  templateUrl: './app-comments.component.html'
})

export class AppCommentsComponent implements OnInit {
  // @Input() public comments: CommentsModel[];
  @Input() public postId: string;
  @Output() public emit: EventEmitter<any>;

  constructor(private store: Store<PostCommentsState>) {

  }
  comments$: Observable<CommentsModel[]>;

  commentsForm: FormGroup;

  ngOnInit(): void {
    this.comments$ = this.store.select(selectComments);
    this.store.dispatch(commentsLoad({id: '1'}));
    }
  }

