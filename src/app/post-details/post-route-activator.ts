import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { PostsService } from '../services/get-posts.service';

@Injectable()
export class PostRouteActivator implements CanActivate{
  constructor(private postService: PostsService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const postExists = !!this.postService.getPost(+route.params['id']);

    if (!postExists) {
      this.router.navigate(['/404']);
    }
    return postExists;
  }
}
