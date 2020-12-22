import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../services/get-posts.service';
import { CommentsModel, PostsModel } from '../../shared/posts.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styles: [``]
})

export class PostDetailsComponent implements OnInit {
  @Input() post: PostsModel;
  public comments: CommentsModel[];

  constructor(private postService: PostsService, private route: ActivatedRoute, private router: Router) {

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
  public navigateToComments(postId: string): Promise<boolean> {
    return this.router.navigate(['../posts/' + postId + '/comments']);

  }
}
