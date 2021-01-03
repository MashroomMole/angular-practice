import { Component, Input } from '@angular/core';
import { CommentsModel } from '../../shared/model/model';

@Component({
  selector: 'app-comments',
  templateUrl: './app-comments.component.html'
})

export class AppCommentsComponent {
  @Input() public postId: string;
  @Input() public comments: CommentsModel[];


  constructor() {}
}
