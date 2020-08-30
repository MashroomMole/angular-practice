import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../services/get-posts.service';
import { PostsModel } from '../shared/posts.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './post-details.component.html',
  styles: [``]
})

export class PostDetailsComponent implements OnInit {
  public post: PostsModel;

  constructor(private postService: PostsService, private route: ActivatedRoute) {

  }

  postDetails: FormGroup;

  public ngOnInit(): void {
    const title = new FormControl();
    const id = new FormControl();
    const userId = new FormControl();
    const body = new FormControl();
    this.postDetails = new FormGroup({
      title,
      id,
      userId,
      body
    });

    this.route.params.forEach((params: Params) => {
        this.postService.getPost(+ params ['id']).subscribe((post: PostsModel) => {
          this.post = post;
        });
      }
    );
  }
}
