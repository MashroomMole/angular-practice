import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommentsModel } from '../../shared/model';

@Component({
  selector: 'app-comments-details',
  templateUrl: './app-comments-details.component.html'
})

export class AppCommentsDetailsComponent {
  @Input()
  public comments: CommentsModel[];
  @Output()
  initializeNewProduct = new EventEmitter<void>();

  // @Input() public comments: CommentsModel[];

  constructor() {

  }

  commentsForm: FormGroup;

  }

