import { Component, Input, OnInit } from '@angular/core';
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
export class PostThumbnailComponent implements OnInit {
  @Input() public post: PostModel;

constructor(private router: Router) {}

public ngOnInit(): void {
}

  public navigateToPost(postId: string): Promise<boolean> {
    return this.router.navigateByUrl('posts/' + postId);
  }
}


