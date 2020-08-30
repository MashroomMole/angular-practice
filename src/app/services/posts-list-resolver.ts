import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostsService } from './get-posts.service';

@Injectable()

export class PostsListResolver implements Resolve<any> {
  constructor(private postsService: PostsService) {

  }
  resolve() {
    return this.postsService.getPosts();
  }

}
