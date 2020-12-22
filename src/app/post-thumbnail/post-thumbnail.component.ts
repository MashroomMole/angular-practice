import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostsModel } from '../shared/posts.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
})

export class PostThumbnailComponent {
  @Input() public post: PostsModel;
  @Output() public eventClick = new EventEmitter();

constructor(private router: Router) {}

  public navigateToPost(postId: string): Promise<boolean> {
    return this.router.navigate(['../posts/' + postId]);

  }
}


