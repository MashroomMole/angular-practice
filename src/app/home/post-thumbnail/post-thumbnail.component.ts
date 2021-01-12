import { Component, Input } from '@angular/core';
import { PostModel } from '../../shared/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
})
/**
 * PostThumbnailComponent renders details
 *  for each post on home page
 */
export class PostThumbnailComponent {
  @Input() public post: PostModel;

constructor(private router: Router) {}

  public navigateToPost(postId: string): Promise<boolean> {
    return this.router.navigateByUrl('posts/' + postId);
  }
}


