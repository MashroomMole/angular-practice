import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostsModel } from '../shared/posts.model';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../services/get-posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styles: [`
      .thumbnail {
          min-height: 210px;
      }

      .pad-left {
          margin-left: 10px;
      }

      .well div {
          color: #bbb;
      }
  `
  ]
})

export class PostThumbnailComponent implements OnInit {
  @Input() public post: PostsModel;
  @Output() public eventClick = new EventEmitter();

  constructor(private postService: PostsService, private route: ActivatedRoute) {
  }

  postForm: FormGroup;

  public ngOnInit() {
    const title = new FormControl();
    const id = new FormControl();
    let userId = new FormControl();
    let body = new FormControl();
    this.postForm = new FormGroup({
      title: title,
      id: id,
      userId: userId,
      body: body
    });
  }
}


