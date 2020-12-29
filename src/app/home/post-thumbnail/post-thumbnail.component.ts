import { Component, Input } from '@angular/core';
import { PostModel } from '../../shared/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
})

export class PostThumbnailComponent {
  @Input() public post: PostModel;
  // @Output() public eventClick = new EventEmitter();

constructor(private router: Router) {}

  public navigateToPost(postId: string): Promise<boolean> {
    return this.router.navigate(['../posts/' + postId]);

  }
}


